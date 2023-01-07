import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'

// Projects-Data
import data from './assets/projects-data'

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

  const [projects, setProjects] = React.useState(data)
  return (
    <div className={`main ${theme}`}>
      <BrowserRouter>
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
        />
        <Routes>
          <Route path='/' element={
          <Home
            theme={theme}
            projects={projects}
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
