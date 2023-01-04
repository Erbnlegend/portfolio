import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import PropTypes from 'prop-types'

const Home = (props) => {
  return (
    <div className='content-container'>
      <Hero />
      <Projects
        projects={props.projects}
      />
    </div>
  )
}

Home.propTypes = {
  projects: PropTypes.array
}

export default Home
