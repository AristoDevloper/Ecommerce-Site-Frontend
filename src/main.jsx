import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import { API_BASE_URL } from './config/api'

const LOCAL_BACKEND_URL = 'http://localhost:8000'
const PROD_BACKEND_URL = 'https://ecommercesitebackend02.vercel.app'

const backendHosts = new Set([LOCAL_BACKEND_URL, PROD_BACKEND_URL])
const originalFetch = window.fetch.bind(window)

function normalizeBackendUrl(urlString) {
  try {
    const parsedUrl = new URL(urlString)
    const parsedOrigin = `${parsedUrl.protocol}//${parsedUrl.host}`

    if (!backendHosts.has(parsedOrigin)) {
      return urlString
    }

    return `${API_BASE_URL}${parsedUrl.pathname}${parsedUrl.search}${parsedUrl.hash}`
  } catch {
    return urlString
  }
}

window.fetch = (input, init) => {
  if (typeof input === 'string') {
    return originalFetch(normalizeBackendUrl(input), init)
  }

  if (input instanceof URL) {
    return originalFetch(normalizeBackendUrl(input.toString()), init)
  }

  if (input instanceof Request) {
    const normalizedUrl = normalizeBackendUrl(input.url)

    if (normalizedUrl !== input.url) {
      return originalFetch(new Request(normalizedUrl, input), init)
    }
  }

  return originalFetch(input, init)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
