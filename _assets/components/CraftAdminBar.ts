import { CraftAdminBarResponse } from '../admin-bar.ts'
import { AdminBar, AdminBarCheckbox, AdminBarCheckboxChangeEvent } from 'admin-bar-component'

enum ApiStatus {
  Errored = 'errored',
  Loading = 'loading',
  Ready = 'ready',
  Resolved = 'resolved',
}
enum ErrorCode {
  ACTION_URL_INVALID = 'action-url-invalid',
  ACTION_UNSUCCESSFUL = 'action-unsuccessful',
  CSRF_TOKEN_INVALID = 'csrf-token-invalid',
  CSRF_TOKEN_NAME_INVALID = 'csrf-token-name-invalid',
}

export default class CraftAdminBar extends HTMLElement {
  static observedAttributes = ['data-api-status']

  #adminBar: AdminBar | null = null

  /**
   * The url to the `admin-bar/admin-bar` controller action.
   * @private
   */
  private _actionUrl: string | undefined = undefined

  /**
   * The CSRF token as provided by Craft CMS.
   * @private
   */
  private _csrfToken: string | undefined = undefined

  /**
   * Keeps track of the current status of requests to the controller action.
   * @private
   */
  private _requestStatus: ApiStatus | undefined

  /**
   * The url to the `users/session-info` controller action.
   * @private
   */
  private _sessionActionUrl: string | undefined = undefined

  attributeChangedCallback(name: string, _oldValue: string, newValue: string) {
    // Keep `_requestStatus` in sync with `data-api-status`
    if (
      name === 'data-api-status' &&
      [ApiStatus.Errored, ApiStatus.Loading, ApiStatus.Ready, ApiStatus.Resolved].includes(newValue as ApiStatus)
    ) {
      // Invalidate the current CSRF token.
      if (newValue === ApiStatus.Errored) {
        this._csrfToken = undefined
      }

      // Set request status to new value
      this._requestStatus = newValue as ApiStatus
    }
  }

  connectedCallback(): void {
    this.#adminBar = document.getElementById(this.dataset.adminBar ?? '') ?? null

    this._actionUrl = this.dataset.actionUrl
    this._sessionActionUrl = this.dataset.sessionActionUrl

    this.setApiStatus(ApiStatus.Ready)

    this.setUpDebugToolbarCheckbox()
  }

  /**
   * Performs a request to the AdminBarController default action.
   */
  async actionRequest(request: string, actionParams: string = ''): Promise<CraftAdminBarResponse | undefined> {
    // If a request is currently in progress, bail
    if (this._requestStatus === ApiStatus.Loading) {
      return
    }

    // Check to see if action url is present
    if (this._actionUrl === undefined) {
      return {
        message: ErrorCode.ACTION_URL_INVALID,
        status: 'error',
      }
    }
    // Check to see if action url is present
    if (this._csrfToken === undefined) {
      const session = await this.getSessionInfo()

      /**
       * Try to get a new CSRF token from Craft CMS
       */
      if (session.csrfTokenValue) {
        this._csrfToken = session.csrfTokenValue
      } else {
        return {
          message: ErrorCode.CSRF_TOKEN_INVALID,
          status: 'error',
        }
      }
    }

    try {
      this.setApiStatus(ApiStatus.Loading)

      // Create new form data and populate it to pass into the controller action.
      const params = new FormData()
      params.append('requestHandle', request)

      if (actionParams) {
        params.append('params', actionParams)
      }

      const response = await fetch(this._actionUrl, {
        body: params,
        headers: {
          Accept: 'application/json',
          'X-CSRF-Token': this._csrfToken ?? '',
          'X-Requested-With': 'XMLHttpRequest',
        },
        method: 'POST',
      })

      // If request is not complete, throw error.
      if (!response.ok) {
        this.setApiStatus(ApiStatus.Errored)
        throw new Error(`Response status: ${response.status}`)
      }

      // Get response body and parse it as JSON.
      const json = await response.json()
      if (json.status !== 'success') {
        throw json.message
      }

      this.setApiStatus(ApiStatus.Resolved)
      return json
    } catch (error) {
      this.setApiStatus(ApiStatus.Errored)
      return {
        message: error as string,
        status: 'error',
      }
    }
  }

  private async getSessionInfo() {
    if (this._sessionActionUrl) {
      return fetch(this._sessionActionUrl, {
        headers: {
          Accept: 'application/json',
        },
      }).then((response) => response.json())
    }
  }

  /**
   * Sets the `data-api-status` attribute to an `ApiStatus` value.
   * @param apiStatus A value from the `ApiStatus` enum.
   * @private
   */
  private setApiStatus(apiStatus: ApiStatus) {
    // Visually show the progress of the request.
    if (this.#adminBar) {
      switch (apiStatus) {
        case ApiStatus.Errored:
          this.#adminBar.setAttribute('progress', '-1')
          break
        case ApiStatus.Loading:
          this.#adminBar.setAttribute('progress', '50')
          break
        case ApiStatus.Resolved:
          this.#adminBar.setAttribute('progress', '100')
          break
      }
    }

    // Change the status attribute on the `<craft-admin-bar>` element.
    this.dataset.apiStatus = apiStatus
  }

  private setUpDebugToolbarCheckbox() {
    const checkboxElement: AdminBarCheckbox = this.#adminBar?.querySelector('#admin-bar-checkbox-debug-toolbar')

    if (checkboxElement) {
      // Add event listener to toggle debug toolbar
      checkboxElement.addEventListener('change', async (e: AdminBarCheckboxChangeEvent) => {
        checkboxElement.setAttribute('disabled', true)

        await window.adminBarPostRequest(
          document.getElementById(this.dataset.adminBar ?? ''),
          'admin-bar-debug-toolbar-toggle',
          JSON.stringify({ query: e.checked })
        )
        checkboxElement.removeAttribute('disabled')
      })
    }
  }
}

customElements.define('craft-admin-bar', CraftAdminBar)
