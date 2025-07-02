export interface AdminBar {
  environment?: {
    label: string
  }
  greeting?: {
    avatarSrc?: string
    avatarAlt?: string
    text: string
  }
  logout?: {
    href: string
    label: string
  }
}
export interface AdminBarText {
  labelContent?: string
  labelPosition?: 'after' | 'before'
  style?: Record<string, string>
  textContent?: string
}

export default class AdminBarBuilder {
  // The element where the Admin Bar is rendered. It will replace the contents of the container element.
  private _container: HTMLElement | null = null

  // Data formatted for render
  private _formattedData: AdminBar | null = null

  constructor({ container, data }: { container: HTMLElement | null; data?: AdminBar }) {
    let autoRender = false

    // Set container
    if (!container) {
      throw 'Container not supplied or not valid.'
    }
    this._container = container

    if (data) {
      autoRender = this._formatAdminBarData(data)
    }

    if (autoRender) {
      this.adminBar()
      console.log('rendering admin bar')
    }
  }

  /**
   * Renders Admin Bar in container
   */
  adminBar() {
    // Validate data
    const adminBarElement = document.createElement('admin-bar')

    adminBarElement.className = 'sticky'

    if (this._formattedData?.environment) {
      adminBarElement.setAttribute('show-environment', '')
      adminBarElement.append(
        this._addChildText({
          labelContent: this._formattedData.environment.label,
          style: {
            '--admin-bar-text-label-color-bg': 'var(--admin-bar-environment-bg-color)',
          },
        })
      )
    }

    if (this._formattedData?.greeting) {
      adminBarElement.setAttribute('show-greeting', '')
      adminBarElement.setAttribute('greeting-text', this._formattedData.greeting.text)
    }

    if (this._formattedData?.logout) {
      adminBarElement.setAttribute('show-logout', '')
      adminBarElement.setAttribute('logout-href', this._formattedData.logout.href)
      adminBarElement.setAttribute('logout-label', this._formattedData.logout.label)
    }

    if (this._formattedData) this._container?.replaceChildren(adminBarElement)
  }

  private _addChildText({ labelContent, labelPosition, style, textContent }: AdminBarText) {
    const textElement = document.createElement('admin-bar-text')

    if (labelContent) {
      textElement.setAttribute('label-content', labelContent)
    }
    if (labelPosition) {
      textElement.setAttribute('label-position', labelPosition)
    }
    if (style) {
      const cssProperties: Record<string, string> = {}
      // If CSS Custom Propery, set it right away
      // If regular CSS property, add it to object and add it later
      Object.keys(style).forEach((key: string) => {
        if (key.startsWith('--')) {
          textElement.style.setProperty(key, style[key])
        } else {
          cssProperties[key] = style[key]
        }
      })
      Object.assign(textElement.style, cssProperties)
    }
    if (textContent) {
      textElement.setAttribute('text-content', textContent)
    }

    return textElement
  }

  private _formatAdminBarData(data: AdminBar) {
    let isValid = false
    const formattedData: AdminBar = {}
    this._formattedData = null

    const { environment, greeting, logout } = structuredClone(data)

    // Verify greeting properties
    if (environment?.label) {
      formattedData.environment = {
        label: environment.label,
      }
    }

    // Verify greeting properties
    if (greeting?.text) {
      formattedData.greeting = {
        text: greeting.text,
      }
    }

    // Verify logout properties
    if (logout?.href && logout?.label) {
      formattedData.logout = {
        href: logout.href,
        label: logout.label,
      }
    }

    // TODO write correct validation
    // isValid = formattedData?.greeting !== undefined
    isValid = true

    if (isValid) {
      this._formattedData = formattedData
    }

    return isValid
  }
}
