import React from 'react'
import PropTypes from 'prop-types'

const ProjectItem = (props) => {
  const { project } = props
  return (
    <a href={`#${project.name}`}><li>{`  { ...${project.name} },`}</li></a>
  )
}

ProjectItem.propTypes = {
  project: PropTypes.object
}

export default ProjectItem
