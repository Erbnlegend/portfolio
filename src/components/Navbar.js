import React from 'react'
import { NavLink } from 'react-router-dom'
import { Sun } from 'lucide-react'

import { Moon } from 'lucide-react'

const Navbar = () => {
  function userLocation () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showUserPosition)
    } else {
      DOMElements.error.innerHTML = 'You have disabled Location or is otherwise incapacitated'
    }
  }
  userLocation()
  function showUserPosition (showUserPosition) {
    const latitude = showUserPosition.coords.latitude
    const longitude = showUserPosition.coords.longitude
    const position = { lat: latitude, lon: longitude }
    console.log(`Latitude: ${latitude} Longitude: ${longitude}`)
}
  return (
    <nav className='navbar'>
      <Sun className='weather'/>
      <ul className='nav'>
        <NavLink to='./#projects'><li>Projects</li> </NavLink>
        <NavLink to='about'><li>About</li> </NavLink>
        <li className='toggleTheme'><Moon className='moon'/></li>
      </ul>
    </nav>
  )
}

export default Navbar