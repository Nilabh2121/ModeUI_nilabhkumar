import React from 'react'
import './LogoCloud.css'
import LogoCloud1 from "../../Assets/Container.jpg"
import nuxt from '../../Assets/Nuxt.png'
import miro from '../../Assets/Miro.png'
import Lottie from '../../Assets/LottieFiles.png'
import Wise from '../../Assets/Companylogo.png'
import Dribble from '../../Assets/Dribble.png'
import Kinsta from '../../Assets/Kinsta.png'
import AngelList from '../../Assets/Angellist.png'
import Behance from '../../Assets/Behance.png'

const LogoCloud = () => {
  return (
    <div className='LogoCloud'>
        <div className='LogoCloudContainer'>
          <img src={nuxt} alt='' className='nuxt'/>
          <img src={miro } alt='' className='miro'/>
          <img src={Lottie} alt=''className='lottie'/>
          <img src={Wise} alt=''className='wise'/>
          <img src={Dribble} alt=''className='dribble'/>
          <img src={Kinsta} alt=''className='kinsta'/>
          <img src={AngelList} alt=''className='angellist'/>
          <img src={Behance} alt=''className='behance'/>
        </div>
    </div>
  )
}

export default LogoCloud
