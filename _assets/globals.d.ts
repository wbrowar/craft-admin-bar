declare global {
  interface Window {
    adminBarPostRequest(target: HTMLElement | null, request: string, body: string)
  }
}

export {}
