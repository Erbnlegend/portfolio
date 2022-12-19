import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Styles images
import './assets/close.svg'
import './assets/open.svg'

// Styles
import './index.html'
import './styles/main.css'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
