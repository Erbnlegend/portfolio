import React from 'react'
import Hero from './Hero'
import Projects from './Projects'
import PropTypes from 'prop-types'
import Footer from './Footer'

const Home = (props) => {
  return (
    <div className='content-container'>
      <Hero />
      <Projects
        projects={props.projects}
      />
      <Footer />
    </div>
  )
}

Home.propTypes = {
  projects: PropTypes.array
}

export default Home
