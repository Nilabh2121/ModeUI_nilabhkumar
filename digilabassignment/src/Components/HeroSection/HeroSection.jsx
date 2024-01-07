import React from 'react'
import './HeroSection.css'
import Arrowright from '../../Assets/arrow-right.svg'

const HeroSection = () => {
  return (
    <div className='HeroSection'>
      <div className='HContainer'>
        <div className='h4text'>Seamless experience</div>
        <div className='h1text'>Unleashing the Next Generation of Card Solutions</div>
        <div className='ptext'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</div>
        <div className='Mainbtn'>
            Unlock your Card
            <img src={Arrowright} alt=''/>
        </div>
      </div>
      <div className='lasttext'>
      *No credit card required
      </div>
    </div>
  )
}

export default HeroSection
