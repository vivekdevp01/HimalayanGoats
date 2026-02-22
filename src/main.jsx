import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async';
import './style.css' // Put this at the top of main.jsx
createRoot(document.getElementById('root')).render(
 <HelmetProvider>
    <App />
  </HelmetProvider>
)
