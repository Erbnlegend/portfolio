import React from 'react'
import PropTypes from 'prop-types'

const ProjectItemImages = (props) => {
  const { project } = props

  const toolsMap = project.tools.map((item, index) => {
    return (
      <img className='tools' key={index} src={`./imgs/${item}.svg`} alt={item} title={item}/>
    )
  })

  return (
    <div className='preview' id={project.name} style={{ backgroundImage: `url(${project.img})` }} alt={project.textName} >
      <div className='preview-tint'></div>
      <div className='flex-container header'>
          <div className='title'>{project.textName}</div>
          <div>
            {toolsMap}
          </div>
        </div>
      <div className='description text-md'>{project.description}</div>
      <div className='buttons text-sm'>
        <a className='live' href={`https://www.aaronerb.dev/projects/${project.name}`} target='_blank' rel="noreferrer"><button>Live preview</button></a>
        <a className='code' href={project.github} target='_blank' rel="noreferrer"><button>View the code</button></a>
      </div>
    </div>
  )
}

ProjectItemImages.propTypes = {
  project: PropTypes.object
}

export default ProjectItemImages
