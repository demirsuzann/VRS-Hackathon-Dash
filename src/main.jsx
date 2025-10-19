import React from 'react'
import { createRoot } from 'react-dom/client'
import DinoKeeperDashboard from './DinoKeeperDashboard'
import QRCodeModal from './QRCodeModal'
import './styles.css'

const App = () => (
  <>
    <DinoKeeperDashboard />
    <QRCodeModal />
  </>
)

createRoot(document.getElementById('root')).render(<App />)
