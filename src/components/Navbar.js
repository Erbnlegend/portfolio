import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Moon, Menu } from 'lucide-react'
import PropTypes from 'prop-types'

const Navbar = (props) => {
  const [weather, setWeather] = React.useState([])
  const isMounted = useRef(false)

  const [menu, setMenu] = React.useState(true)

  const menuIcon = document.querySelector('.menuIcon')
  const fullScreenOverlay = document.querySelector('.fullScreenOverlay')
  const fullScreenMenu = document.querySelector('.fullScreenMenu')
  const menuOverlay = (e) => {
    if (menu) {
      menuIcon.style.transform = 'rotate(360deg)'
      fullScreenMenu.style.transform = 'rotate(360deg)'
      fullScreenMenu.style.height = '100%'
      fullScreenOverlay.style.height = '100%'
      setMenu(false)
    }
    if (!menu) {
      menuIcon.style.transform = 'none'
      fullScreenMenu.style.transform = 'none'
      fullScreenMenu.style.height = '0px'
      fullScreenOverlay.style.height = '0px'
      setMenu(true)
    }
  }

  useEffect(() => {
    if (!isMounted.current) {
      userLocation()
    }

    function userLocation () {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showUserPosition, blockUserPosition)
      } else {
        console.log('error')
      }
    }

    function showUserPosition (showUserPosition) {
      const latitude = showUserPosition.coords.latitude
      const longitude = showUserPosition.coords.longitude
      getWeatherData(latitude, longitude)
    }

    function blockUserPosition (blockUserPosition) {
      setWeather('what the f???')
    }

    async function getWeatherData (lat, lon) {
      try {
        const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=c2e48ee08dc642ad9ac164602222212&q=${lat},${lon}`,
        {
          mode: 'cors'
        })
        const weatherData = await response.json()
        isMounted.current = true
        setWeather(weatherData)
        return
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div className=''>
      <nav className='navbar'>
        {(typeof weather.current !== 'undefined')
          ? (
          <ul className='weather'>
            <li><img src={weather.current.condition.icon} /></li>
            <li>{weather.current.temp_f}&#8457;</li>
            <div className='flex-column'>
              <li className='text-sm'>{weather.location.name}</li>
              <li className='text-sm'>{weather.location.region}</li>
            </div>
          </ul>
            )
          : (
          <div className='weather flex-container'>
            <div className='loader-3'></div>
            <li className='text-sm'>Location must be allowed</li>
          </div>
            )}
        <ul className='desktopMenu'>
          <NavLink to='./#projects'><li>Projects</li> </NavLink>
          <NavLink to='about'><li>About</li> </NavLink>
          <li className='toggleTheme'><Moon className='moon' onClick={props.toggleTheme}/></li>
        </ul>
        <ul onClick={menuOverlay} className='mobileMenu'>
          <li><Menu className='menuIcon' /></li>
        </ul>
      </nav>
      <div className='fullScreenOverlay'></div>
        <ul className='fullScreenMenu'>
          <NavLink onClick={menuOverlay} to='./#projects'><li>Projects</li> </NavLink>
          <NavLink onClick={menuOverlay} to='about'><li>About</li> </NavLink>
          <li onClick={menuOverlay} className='toggleTheme'><Moon className='moon' onClick={props.toggleTheme}/></li>
        </ul>
    </div>
  )
}
Navbar.propTypes = {
  toggleTheme: PropTypes.func
}

export default Navbar
