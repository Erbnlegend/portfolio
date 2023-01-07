import React from 'react'

const About = () => {
  return (
    <div className='about content-container'>
      <h2 className='header text-bg'>About me</h2>
      <div className='section flex-container'>
        <img src='./imgs/aaron.jpg' alt='aaron being handsome' />
        <p className='paragraph'>
        Hi there! My name is Aaron Erb and I am a cabinet installer and business owner, turned web developer.
        I have always been a problem solver at heart and love coming up with creative solutions to complex challenges.
        After six years of working as a cabinet installer and always tinkering with building computers and learning web technologies,
        I decided to pursue my passion for technology and enrolled in a web development program.
        I quickly fell in love with the field and knew that this was my true calling.
        As a web developer, I bring my strong problem solving and creativity skills to the table.
        I am always looking for ways to improve processes and find innovative solutions to problems.
        In my free time, I enjoy tinkering with new technologies and staying up to date on the latest web development trends.
        I am excited to continue learning and growing as a web developer, and am confident that my background in cabinet installation, and the level of detail it requires,
        has prepared me for a successful career in this field.
        </p>
      </div>
    </div>
  )
}

export default About
