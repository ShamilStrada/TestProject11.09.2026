import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
import MainSetup from './MainSetup'
import { BrowserRouter, Routes } from 'react-router-dom'
import NewApp from './NewApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
       <NewApp></NewApp>
  </StrictMode>,
)
