import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

const App = () => {
  // Dark Mode
  const [theme, setTheme] = React.useState('dark')

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <div className={`main ${theme}`}>
      <BrowserRouter>
        <Navbar
          toggleTheme={toggleTheme}
        />
        <Routes>
          <Route path='/' element={
          <Home

          />} />
          <Route path='/about' element={
          <About

          />} />
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
