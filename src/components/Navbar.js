import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { Moon } from 'lucide-react'

const Navbar = () => {
  const [weather, setWeather] = React.useState([])
  const isMounted = useRef(false)

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
        <div></div>
          )}
      <ul className='nav'>
        <NavLink to='./#projects'><li>Projects</li> </NavLink>
        <NavLink to='about'><li>About</li> </NavLink>
        <li className='toggleTheme'><Moon className='moon'/></li>
      </ul>
    </nav>
  )
}

export default Navbar
