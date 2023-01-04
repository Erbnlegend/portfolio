import React from 'react'
import PropTypes from 'prop-types'

const ProjectItem = (props) => {
  const { project } = props
  return (
    <div>
        <li>{`  { ...${project.name} },`}</li>
      <div className='project-previews'></div>
    </div>
  )
}

ProjectItem.propTypes = {
  project: PropTypes.object
}

export default ProjectItem
