import React from 'react'
import { NavLink } from 'react-router-dom'

import { Moon } from 'lucide-react'

const Navbar = () => {
  return (
    <nav className='navbar'>
      {/* Weather */}
      <ul>
        <NavLink to='./#projects'><li>Projects</li> </NavLink>
        <NavLink to='about'><li>About</li> </NavLink>
      </ul>
      <div className='toggleTheme'><Moon /></div>
    </nav>
  )
}

export default Navbar