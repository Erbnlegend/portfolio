import React from 'react'
import PropTypes from 'prop-types'

const ProjectItemImages = (props) => {
  const { project } = props

  const toolsMap = project.tools.map((item, index) => {
    return (
      <img className='tools' key={index} src={`./imgs/${item}.svg`} alt={item}/>
    )
  })

  return (
    <div className='preview' id={project.name} style={{ background: `url(${project.img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} alt={project.textName} >
      <div className='preview-tint'>
      <div className='text-md'>{project.textName}</div>
      {toolsMap}
      </div>
    </div>
  )
}

ProjectItemImages.propTypes = {
  project: PropTypes.object
}

export default ProjectItemImages
