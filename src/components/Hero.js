import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <svg className='openTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1' >
        <path
          d="m 4.9999586,1 -4.00000001,3.9999999 4.00000001,4"
        />
      </svg>
      <div className='quote'>
        <h1 className='text-bg'>Hello!</h1>
        <div>I am a creative, problem solving front-end developer</div>
        <div className='author'>- Aaron Erb</div>
      </div>
      <svg className='closeTag' viewBox="0 0 14.499959 18" strokeLinecap="round" strokeLinejoin="round" fill='none' stroke='currentColor' strokeWidth='1'>
        <path d="m 9.5,13 4,-4 -4,-4"/>
        <path d="M 6,1 1,17"/>
      </svg>
    </div>
  )
}

export default Hero
