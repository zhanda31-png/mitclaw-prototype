const hotDataMap = new Map()
const customListenersMap = new Map()
const styleSheetsMap = new Map()

const cspNonce =
  typeof document !== 'undefined'
    ? document.querySelector('meta[property="csp-nonce"]')?.nonce
    : undefined

let lastInsertedStyle

class NoopHMRContext {
  constructor(ownerPath) {
    this.ownerPath = ownerPath

    if (!hotDataMap.has(ownerPath)) {
      hotDataMap.set(ownerPath, {})
    }
  }

  get data() {
    return hotDataMap.get(this.ownerPath)
  }

  accept() {
    return undefined
  }

  acceptExports() {
    return undefined
  }

  dispose() {
    return undefined
  }

  prune() {
    return undefined
  }

  decline() {
    return undefined
  }

  invalidate() {
    return undefined
  }

  on(event, cb) {
    const listeners = customListenersMap.get(event) ?? []
    listeners.push(cb)
    customListenersMap.set(event, listeners)
  }

  off(event, cb) {
    const listeners = customListenersMap.get(event)

    if (!listeners) return

    const nextListeners = listeners.filter((listener) => listener !== cb)

    if (nextListeners.length === 0) {
      customListenersMap.delete(event)
      return
    }

    customListenersMap.set(event, nextListeners)
  }

  send() {
    return undefined
  }
}

export class ErrorOverlay extends HTMLElement {
  constructor(err = {}) {
    super()

    const shadowRoot = this.attachShadow({ mode: 'open' })
    const container = document.createElement('pre')
    const title = err?.message ? `Vite HMR disabled\n\n${err.message}` : 'Vite HMR disabled'

    container.textContent = title
    container.style.cssText = [
      'position:fixed',
      'inset:16px',
      'margin:0',
      'padding:16px',
      'overflow:auto',
      'background:#111827',
      'color:#f9fafb',
      'border-radius:12px',
      'font:12px/1.5 ui-monospace,SFMono-Regular,Menlo,monospace',
      'z-index:2147483647',
    ].join(';')

    shadowRoot.appendChild(container)
  }
}

export function createHotContext(ownerPath) {
  return new NoopHMRContext(ownerPath)
}

export function injectQuery(url, queryToInject) {
  if (url[0] !== '.' && url[0] !== '/') {
    return url
  }

  const pathname = url.replace(/[?#].*$/, '')
  const { search, hash } = new URL(url, 'http://vite.dev')

  return `${pathname}?${queryToInject}${search ? `&${search.slice(1)}` : ''}${hash || ''}`
}

export function updateStyle(id, content) {
  if (typeof document === 'undefined') return

  let style = styleSheetsMap.get(id)

  if (!style) {
    style = document.createElement('style')
    style.setAttribute('type', 'text/css')
    style.setAttribute('data-vite-dev-id', id)

    if (cspNonce) {
      style.setAttribute('nonce', cspNonce)
    }

    if (!lastInsertedStyle) {
      document.head.appendChild(style)
      setTimeout(() => {
        lastInsertedStyle = undefined
      }, 0)
    } else {
      lastInsertedStyle.insertAdjacentElement('afterend', style)
    }

    lastInsertedStyle = style
    styleSheetsMap.set(id, style)
  }

  style.textContent = content
}

export function removeStyle(id) {
  if (typeof document === 'undefined') return

  const style = styleSheetsMap.get(id)

  if (!style?.parentNode) return

  style.parentNode.removeChild(style)
  styleSheetsMap.delete(id)
}
