import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { CounterContextProvider } from './context/CounterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2 - criando provider */}
    <CounterContextProvider>
      <App />
    </CounterContextProvider>
  </StrictMode>,
)
