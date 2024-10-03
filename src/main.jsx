import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom'
import Globalstate from './context/Globalstate.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <StrictMode>
   <Globalstate>
   <App />
   </Globalstate>
  </StrictMode>
  </Router>
)
