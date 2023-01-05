import React, { useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import PropTypes from 'prop-types'

import ProjectItem from './ProjectItem'
import ProjectItemImages from './ProjectItemImages'

const Projects = (props) => {
  const { projects } = props
  const projectMap = projects.map((project, index) => {
    return (
      <ProjectItem key={index}
        project={project}
      />
    )
  })

  const projectPreviewMap = projects.map((project, index) => {
    return (
      <ProjectItemImages key={index}
        project={project}
      />
    )
  })

  // Animations
  function useIntersectionObserver (
    elementRef,
    { threshold = 0, root = null, rootMargin = '-175px', freezeOnceVisible = false }
  ) {
    const [entry, setEntry] = React.useState()

    const frozen = entry?.isIntersecting && freezeOnceVisible

    const updateEntry = ([entry]) => {
      setEntry(entry)
    }

    useEffect(() => {
      const node = elementRef?.current
      const hasIOSupport = !!window.IntersectionObserver

      if (!hasIOSupport || frozen || !node) return

      const observerParams = { threshold, root, rootMargin }
      const observer = new IntersectionObserver(updateEntry, observerParams)

      observer.observe(node)

      return () => observer.disconnect()
    }, [elementRef, threshold, root, rootMargin, frozen])

    return entry
  }

  const triggerOpacity = React.useRef()
  const dataRefOpacity = useIntersectionObserver(triggerOpacity, {
    freezeOnceVisible: false
  })

  const opacity = useSpring({
    config: { duration: 300 },
    from: { opacity: 0, left: '-200px' },
    to: {
      opacity: dataRefOpacity?.isIntersecting ? 1 : 0,
      left: dataRefOpacity?.isIntersecting ? '15px' : '-200px'
    }
  })

  return (
    <div className='projects'>
      <div className='projectsAnimation' ref={triggerOpacity} >
        <ul className='projectsNav text-md'>
          <animated.div className='fixed' style={ opacity }>
            <div>Projects {'['}</div>
              { projectMap }
            <div>{']'}</div>
          </animated.div>
        </ul>
        <div className='flex-column-container'>
        { projectPreviewMap }
        </div>
      </div>
    </div>
  )
}

Projects.propTypes = {
  projects: PropTypes.array
}

export default Projects
