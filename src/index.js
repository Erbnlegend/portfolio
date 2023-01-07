import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// Tools Used
import './assets/tools/webpack.svg'
import './assets/tools/css3.svg'
import './assets/tools/html5.svg'
import './assets/tools/nodejs.svg'
import './assets/tools/postcss.svg'
import './assets/tools/react.svg'
import './assets/tools/js.svg'

// Previews
import './assets/previews/battleship.png'
import './assets/previews/github.png'
import './assets/previews/tictactoe.png'
import './assets/previews/weather.png'
import './assets/previews/cv.png'
import './assets/previews/shopping.png'
import './assets/previews/toDo.png'

// About img
import './assets/aaron.jpg'

// Styles
import './index.html'
import './styles/main.css'
import 'normalize.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App />
)
