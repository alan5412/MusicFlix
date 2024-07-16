import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './routes.jsx'
import { BandProvider } from 'Components/Context/BandContext'






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BandProvider>
      <AppRoutes/>
    </BandProvider>
  </React.StrictMode>,
)
