import React from 'react'
import ProjectItem from './ProjectItem'
import PropTypes from 'prop-types'

const Projects = (props) => {
  console.log(props)
  const { projects } = props
  const projectMap = projects.map((project, index) => {
    return (
      <ProjectItem key={index}
        project={project}
      />
    )
  })
  return (
    <div className='projects flex-container'>
      <ul className='text-md'>
        <div>Projects {'['}</div>
          { projectMap }
        <div>{']'}</div>
      </ul>
    </div>
  )
}

Projects.propTypes = {
  projects: PropTypes.array
}

export default Projects
