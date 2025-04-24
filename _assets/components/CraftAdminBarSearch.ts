export default class CraftAdminBarSearch extends HTMLElement {
  /**
   * The form element that handles the search.
   * @private
   */
  private _searchForm: HTMLFormElement | null = null

  /**
   * The element that displays the search results
   * @private
   */
  private _resultsElement: HTMLDivElement | null = null

  /**
   * Handles search via the Craft Search Admin Bar Widget
   * @private
   */
  private _onSearchFormSubmit = async (e: Event) => {
    e.preventDefault()
    const input: HTMLInputElement | null = this.shadowRoot?.querySelector('input[type="search"]') ?? null

    if (input) {
      const response: {
        searchResults: { cpEditUrl: string; title: string; url: string }[]
        searchResultsStatus: 'OK' | 'NO_RESULTS'
      } = await window.adminBarPostRequest(this, 'craft-search-search', JSON.stringify({ query: input.value }))

      if (this._resultsElement) {
        let template
        let templateContent: DocumentFragment

        if (response.searchResultsStatus === 'OK') {
          template = document.getElementById('admin-bar-search-results-template') as HTMLTemplateElement
          templateContent = template.content

          const ulElement = document.createElement('ul')

          response.searchResults.forEach((entry) => {
            // Clone LI and styles from template
            const templateClone = templateContent.cloneNode(true) as HTMLElement
            const liElement = templateClone.querySelector('li')!

            // Link to the CP edit URL.
            const editButtonElement = liElement.querySelector('admin-bar-button.edit')!
            if (entry.cpEditUrl) {
              editButtonElement.setAttribute('button-href', entry.cpEditUrl)
              editButtonElement.setAttribute('label-text', entry.title)
            } else {
              liElement.removeChild(editButtonElement)
            }

            // If entry has a URL link to the page. If not, show the title as text.
            const viewButtonElement = liElement.querySelector('admin-bar-button.view')!
            const entryTitleElement = liElement.querySelector('admin-bar-text.view')!
            if (entry.url ?? false) {
              viewButtonElement.setAttribute('button-href', entry.url)
              viewButtonElement.setAttribute('label-text', entry.title)
              entryTitleElement.remove()
            } else {
              entryTitleElement.setAttribute('text-content', entry.title)
              viewButtonElement.remove()
            }

            // Add all child elements to the search results
            ulElement.append(liElement)
          })

          this._resultsElement.replaceChildren(ulElement)
        } else {
          template = document.getElementById('admin-bar-search-no-results-template') as HTMLTemplateElement
          templateContent = template.content

          this._resultsElement.replaceChildren(templateContent.cloneNode(true))
        }
      }
    }
  }

  constructor() {
    super()

    const template = document.getElementById('admin-bar-search-template') as HTMLTemplateElement
    const templateContent = template.content

    const shadowRoot = this.attachShadow({ mode: 'open' })
    shadowRoot.appendChild(templateContent.cloneNode(true))

    this._searchForm = this.shadowRoot?.querySelector('form') ?? null
    this._resultsElement = this.shadowRoot?.querySelector('form + div') ?? null
  }

  connectedCallback(): void {
    // Set up search widget
    this._searchForm?.addEventListener('submit', this._onSearchFormSubmit)
  }

  disconnectedCallback(): void {
    // Clean up search widget
    this._searchForm?.removeEventListener('submit', this._onSearchFormSubmit)
  }
}

customElements.define('craft-admin-bar-search', CraftAdminBarSearch)
