import React, { useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { useSpring, animated } from 'react-spring'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'

const Hero = () => {
  // Animations
  function useIntersectionObserver (
    elementRef,
    { threshold = 0, root = null, rootMargin = '0px', freezeOnceVisible = false }
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
    config: { duration: 1000 },
    from: { opacity: 0 },
    to: {
      opacity: dataRefSlide?.isIntersecting ? 1 : 0
    }
  })
  const opacityLong = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0 },
    to: {
      opacity: dataRefSlide?.isIntersecting ? 1 : 0
    }
  })

  return (
    <div className='background-container'>
      <div className='hero-background'>
        <div className='tool'></div>
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
        <div ref={ triggerSlide } ></div>
      </div>
      <animated.div style={ opacityShort } >
        <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              autoplay={
                {
                  delay: 3000,
                  disableOnInteraction: false
                }
                }
              spaceBetween={0}
              slidesPerView={1}
              speed={500}
              loop={true}
              touchRatio={4}
              navigation={true}
              pagination={{ clickable: true }}
              className='mySwiper'
        >
          <SwiperSlide>
            <div className="hero">
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
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero">
            <svg className='openTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1' >
              <path
                d="m 4.9999586,1 -4.00000001,3.9999999 4.00000001,4"
              />
            </svg>
                <div className='quote'>
                  <h1 className='text-bg'>Programming</h1>
                  <div className='subText'>isn&apos;t about what you know; it&apos;s about what you can figure out</div>
                  <div className='author'>- Chris Pine</div>
                </div>
            <svg className='closeTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1'>
              <path d="m 9.5,13 4,-4 -4,-4"/>
              <path d="M 6,1 1,17"/>
            </svg>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero">
            <svg className='openTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1' >
              <path
                d="m 4.9999586,1 -4.00000001,3.9999999 4.00000001,4"
              />
            </svg>
                <div className='quote'>
                  <h1 className='text-bg'>Do what you can,</h1>
                  <div className='subText'>with what you have, where you are</div>
                  <div className='author'>- Theodore Roosevelt</div>
                </div>
            <svg className='closeTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1'>
              <path d="m 9.5,13 4,-4 -4,-4"/>
              <path d="M 6,1 1,17"/>
            </svg>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero">
            <svg className='openTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1' >
              <path
                d="m 4.9999586,1 -4.00000001,3.9999999 4.00000001,4"
              />
            </svg>
                <div className='quote'>
                  <h1 className='text-bg'>!false</h1>
                  <div className='subText'>it&apos;s funny because it&apos;s true</div>
                  <div className='author'>- Somebody, not me</div>
                </div>
            <svg className='closeTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1'>
              <path d="m 9.5,13 4,-4 -4,-4"/>
              <path d="M 6,1 1,17"/>
            </svg>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero">
            <svg className='openTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1' >
              <path
                d="m 4.9999586,1 -4.00000001,3.9999999 4.00000001,4"
              />
            </svg>
                <div className='quote'>
                  <h1 className='text-bg'>Don&apos;t limit yourself</h1>
                  <div className='subText'>Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.</div>
                  <div className='author'>- Mary Kay Ash</div>
                </div>
            <svg className='closeTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1'>
              <path d="m 9.5,13 4,-4 -4,-4"/>
              <path d="M 6,1 1,17"/>
            </svg>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero">
            <svg className='openTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1' >
              <path
                d="m 4.9999586,1 -4.00000001,3.9999999 4.00000001,4"
              />
            </svg>
                <div className='quote'>
                  <h1 className='text-bg'>I love you...</h1>
                  <div className='subText'>I know...</div>
                  <div className='author'>- Leia Skywalker/Han Solo</div>
                </div>
            <svg className='closeTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1'>
              <path d="m 9.5,13 4,-4 -4,-4"/>
              <path d="M 6,1 1,17"/>
            </svg>
            </div>
          </SwiperSlide>
        </Swiper>
      </animated.div>
      <animated.div style={ opacityShort } >
      <div className='viewWork'>
        <a href='#githubClone' >
        <p>View my work</p>
        <ChevronDown className='viewArrow'/>
        </a>
      </div>
      </animated.div>
    </div>
  )
}

export default Hero
