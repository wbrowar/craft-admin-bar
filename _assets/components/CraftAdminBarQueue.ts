import { AdminBarButton } from 'admin-bar-component'

export default class CraftAdminBarQueue extends HTMLElement {
  static observedAttributes = ['data-queue-total']

  /**
   * The element that displays the status after checking the current job queue.
   * @private
   */
  #jobStatusElement: HTMLDivElement | null = null

  /**
   * An tuple of job statuses as it will be presented to the user.
   * @private
   */
  #jobTotals: [number, string][] = []

  /**
   * When enabled, regularly checks the job queue on an interval.
   * @private
   */
  #queueCheckerId: number = 0

  /**
   * Total number of jobs received after checking the current job queue.
   * @private
   */
  #queueTotal: number = 0

  /**
   * Button that is used to run remaining jobs in the queue.
   * @private
   */
  #runButtonElement: HTMLFormElement | null = null

  /**
   * Static translations for this custom element.
   * @private
   */
  #tMessages: Record<string, string> = {}

  /**
   * Button that is used to run remaining jobs in the queue.
   * @private
   */
  #widgetLabel: AdminBarButton | null = null

  /**
   * Runs the current job queue.
   * @private
   */
  private _checkQueue = async () => {
    const response: {
      jobsWaiting: number
      jobsDelayed: number
      jobsReserved: number
      jobsFailed: number
      totalJobs: number
    } = await window.adminBarPostRequest(this.closest('admin-bar'), 'craft-queue-check', '{}', true)
    if (response) {
      this._setJobTotals({
        jobsWaiting: response.jobsWaiting,
        jobsDelayed: response.jobsDelayed,
        jobsReserved: response.jobsReserved,
        jobsFailed: response.jobsFailed,
      })
      this.setAttribute('data-queue-total', response.totalJobs.toString())
    }
  }

  /**
   * Constructs the jobTotals value.
   * @private
   */
  private _setJobTotals({
    jobsWaiting,
    jobsDelayed,
    jobsReserved,
    jobsFailed,
  }: {
    jobsWaiting: number
    jobsDelayed: number
    jobsReserved: number
    jobsFailed: number
  }) {
    this.#jobTotals = []

    if (jobsWaiting > 0) {
      this.#jobTotals.push([jobsWaiting, this.#tMessages.jobStatusWaiting])
    }
    if (jobsDelayed > 0) {
      this.#jobTotals.push([jobsDelayed, this.#tMessages.jobStatusDelayed])
    }
    if (jobsReserved > 0) {
      this.#jobTotals.push([jobsReserved, this.#tMessages.jobStatusReserved])
    }
    if (jobsFailed > 0) {
      this.#jobTotals.push([jobsFailed, this.#tMessages.jobStatusFailed])
    }
  }

  /**
   * Handle run button click.
   * @private
   */
  private _onRunButtonClick = () => {
    this._runQueue()
  }

  /**
   * Runs the current job queue.
   * @private
   */
  private _runQueue = async () => {
    await window.adminBarPostRequest(this.closest('admin-bar'), 'craft-queue-run', '{}')
    this._checkQueue()
  }

  /**
   * Runs the current job queue.
   * @private
   */
  private _updateJobStatus = async (status: 'has-jobs' | 'no-jobs' | 'running-queue') => {
    // Update job status element with queue total value
    const template = document.getElementById('admin-bar-queue-job-status-template') as HTMLTemplateElement
    const templateContent = template.content

    const templateClone = templateContent.cloneNode(true) as HTMLElement
    const resultsElement = templateClone.querySelector(`.${status}`)!

    if (this.#jobStatusElement) {
      this.#jobStatusElement.replaceChildren(resultsElement)

      if (status === 'has-jobs') {
        this.#jobStatusElement.querySelector('.has-jobs')?.setAttribute('dl-content', JSON.stringify(this.#jobTotals))

        if (this.#queueCheckerId === 0) {
          this.#queueCheckerId = setInterval(this._checkQueue, 10000)
        }
      } else {
        clearInterval(this.#queueCheckerId)
        this.#queueCheckerId = 0
      }
    }
  }

  constructor() {
    super()

    const template = document.getElementById('admin-bar-queue-template') as HTMLTemplateElement
    const templateContent = template.content

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(templateContent.cloneNode(true))

    this.#tMessages = JSON.parse(this.getAttribute('data-t-messages') ?? '{}') ?? {}
    this.#runButtonElement = this.shadowRoot?.querySelector('.run-jobs') ?? null
    this.#jobStatusElement = this.shadowRoot?.querySelector('.job-status') ?? null
    this.#widgetLabel = this.closest('admin-bar-button') ?? null
  }

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    // Keep `_requestStatus` in sync with `data-api-status`
    if (name === 'data-queue-total' && this.#runButtonElement) {
      this.#queueTotal = parseInt(newValue)

      if (this.#queueTotal > 0) {
        // Update widget label with queue total value
        this.#widgetLabel.setAttribute('badge-content', newValue)

        // Display run button
        this.#runButtonElement.style.display = 'block'

        // Update job status element with queue total value
        this._updateJobStatus('has-jobs')
      } else {
        // Update widget label with queue total value
        this.#widgetLabel.removeAttribute('badge-content')

        // Hide run button
        this.#runButtonElement.style.display = 'none'

        // Update job status element with queue total value
        this._updateJobStatus('no-jobs')
      }
    }
  }

  async connectedCallback(): Promise<void> {
    const jobTotals = JSON.parse(this.getAttribute('data-job-totals') ?? '{}')
    this._setJobTotals({
      jobsWaiting: jobTotals.jobsWaiting ?? 0,
      jobsDelayed: jobTotals.jobsDelayed ?? 0,
      jobsReserved: jobTotals.jobsReserved ?? 0,
      jobsFailed: jobTotals.jobsFailed ?? 0,
    })
    this._updateJobStatus(this.#queueTotal ? 'has-jobs' : 'no-jobs')

    // Set up queue widget
    this.#runButtonElement?.addEventListener('click', this._onRunButtonClick)

    if (this.#queueTotal > 0) {
      await window.adminBarPostRequest(this.closest('admin-bar'), 'craft-queue-run', '{}', true)
    }
  }

  disconnectedCallback(): void {
    // Clean up queue widget
    this.#runButtonElement?.removeEventListener('click', this._onRunButtonClick)
  }
}

customElements.define('craft-admin-bar-queue', CraftAdminBarQueue)
