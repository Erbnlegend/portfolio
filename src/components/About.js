import React from 'react'

const About = () => {
  return (
    <div className='about content-container'>
      <h2 className='header text-bg'>About me</h2>
      <div className='section flex-container'>
        <img src='./imgs/aaron.jpg' alt='aaron being handsome' />
        <p className='paragraph'>
          {/* Testing that git works */}
        My name is Aaron, and I am full of passion for technology, tabletop gaming, and exploring new places with my loved ones.
        I am married to my wonderful wife and together we have three beautiful daughters.<br/>
        I have always had a love for technology and while I have not been in the industry for several years now, my experience and skills with JavaScript
        have allowed me to excel with learning new technologies such as React, Node and Express.
        I am always looking for new and exciting opportunities to continue my professional development.
        In addition to my passion for technology, I am also an avid tabletop gamer and enjoy spending time with my family playing games
        and exploring the outdoors.<br />
        As a family, we believe in creating memories and experiencing new things together.
        Recently, we made the exciting decision to move from Phoenix, AZ to Kansas City, MO to start a new chapter in our lives.
        Kansas City offers endless opportunities for exploration and we can&apos;t wait to discover all the adventures this city has in store for us.<br/>
        Thank you for visiting my professional portfolio page, and I hope to have the opportunity to share my skills,
        experiences, and passion for technology with you.
        </p>
      </div>
    </div>
  )
}

export default About
