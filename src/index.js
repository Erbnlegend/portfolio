import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Tools Used
import './assets/tools/webpack.svg'
import './assets/tools/css3-alt.svg'
import './assets/tools/html5.svg'
import './assets/tools/logo-nodejs.svg'
import './assets/tools/postcss.svg'
import './assets/tools/react.svg'
import './assets/tools/square-js.svg'

// Styles
import './index.html'
import './styles/main.css'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App />
)
