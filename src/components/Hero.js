import React, { useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useSpring, animated } from 'react-spring'

const Hero = () => {
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

  const triggerSlide = React.useRef()
  const dataRefSlide = useIntersectionObserver(triggerSlide, {
    freezeOnceVisible: false
  })

  const opacityShort = useSpring({
    config: { duration: 500 },
    from: { opacity: 0, left: '-200px' },
    to: {
      opacity: dataRefSlide?.isIntersecting ? 1 : 0,
      left: dataRefSlide?.isIntersecting ? '0' : '-200px'
    }
  })
  const opacityLong = useSpring({
    config: { duration: 1200 },
    from: { opacity: 0, right: '-200px' },
    to: {
      opacity: dataRefSlide?.isIntersecting ? 1 : 0,
      right: dataRefSlide?.isIntersecting ? '0' : '-200px'
    }
  })

  return (
    <div className='background-container'>
      <div className='hero-background'>
        <div ref={ triggerSlide } ></div>
        <animated.div style={ opacityShort } >
          <div className='tool webpack'></div>
        </animated.div>
        <div className='tool'></div>
        <div className='tool'></div>
        <div className='tool'></div>
        <div className='tool'></div>
        <animated.div style={ opacityLong } >
          <div className='tool postcss'></div>
        </animated.div>
        <div className='tool'></div>
        <animated.div style={ opacityShort } >
          <div className='tool js'></div>
        </animated.div>
        <animated.div style={ opacityLong } >
          <div className='tool html'></div>
        </animated.div>
        <div className='tool'></div>
        <div className='tool'></div>
        <animated.div style={ opacityLong } >
          <div className='tool node'></div>
        </animated.div>
        <div className='tool'></div>
        <div className='tool'></div>
        <div className='tool'></div>
        <animated.div style={ opacityShort } >
          <div className='tool css'></div>
        </animated.div>
        <div className='tool'></div>
        <animated.div style={ opacityLong } >
          <div className='tool react'></div>
        </animated.div>
        <div className='tool'></div>
      </div>
      <div className='hero'>
        <svg className='openTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1' >
          <path
            d="m 4.9999586,1 -4.00000001,3.9999999 4.00000001,4"
          />
        </svg>
        <div className='quote'>
          <h1 className='text-bg'>Hello!</h1>
          <div className='subText'>I am a self-driven, creative and problem solving front-end developer</div>
          <div className='author'>- Aaron Erb</div>
        </div>
        <svg className='closeTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1'>
          <path d="m 9.5,13 4,-4 -4,-4"/>
          <path d="M 6,1 1,17"/>
        </svg>
      </div>
      <div className='viewWork'>
        <p>View my work</p>
        <ChevronDown className='viewArrow'/>
      </div>
    </div>
  )
}

export default Hero
