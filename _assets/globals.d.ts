declare global {
  interface Window {
    adminBarPostRequest(target: HTMLElement, request: string, body: string)
  }
}

export {}
