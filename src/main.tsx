import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App'
import SiteGate from './components/SiteGate'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SiteGate>
        <App />
      </SiteGate>
    </BrowserRouter>
  </StrictMode>
)
