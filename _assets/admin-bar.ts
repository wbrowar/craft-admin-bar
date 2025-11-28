import { AdminBar, defineAdminBarElements } from 'admin-bar-component'
import './admin-bar.css'
import './components/CraftAdminBar.ts'
import type CraftAdminBar from './components/CraftAdminBar.ts'
import './components/CraftAdminBarSearch.ts'

enum ApiStatus {
  Errored = 'errored',
  Loading = 'loading',
  Ready = 'ready',
  Resolved = 'resolved',
}
export interface CraftAdminBarResponse {
  data?: string
  message?: string
  refreshPage?: boolean
  status: 'success' | 'error'
}

/**
 * Define `<admin-bar>` and subcomponents as custom elements.
 */
defineAdminBarElements(['button', 'checkbox', 'text'])

/**
 * Fires a POST request to the Craft Admin Bar Controller action.
 *
 * @param target
 * @param request
 * @param body
 */
window.adminBarPostRequest = async (target: AdminBar | null, request: string, body: string = '') => {
  try {
    if (import.meta.env.DEV) {
      console.log('Firing adminBarPostRequest with params', target, request, body)
    }

    // Find the `<craft-admin-bar>` ancestor element.
    const craftAdminBar: CraftAdminBar | null = document.querySelector(`[data-admin-bar="${target?.id}"]`)

    const response = await craftAdminBar?.actionRequest(request, body)

    if (import.meta.env.DEV) {
      console.log('adminBarPostRequest response', craftAdminBar, response)
    }

    if (response?.status === 'success') {
      if (response.refreshPage) {
        // Reloads the current page, if the action calls for it.
        location.reload()
      } else {
        // Resets the API status back to Ready after a few seconds.
        setTimeout(() => {
          if (craftAdminBar) {
            craftAdminBar.dataset.apiStatus = ApiStatus.Ready
          }
        }, 3000)

        if (response.data) {
          return response.data
        }
      }
    } else {
      throw response?.message
    }
  } catch (error) {
    console.error(`Admin Bar: ${error}`)
  }
}
