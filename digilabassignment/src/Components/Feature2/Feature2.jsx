import React from 'react'
import './Feature2.css'
import ArrowRight from '../../Assets/Rarrow.png'
import mobile from '../../Assets/Mobile.png'
import cardinfo from '../../Assets/Cardinfo.png'

const Feature2 = () => {
  return (
    <div className='Feature2'> 
      <div className='Feature2Conatiner'>
        <div className='F2subtitle'>
            <div className='F2content'>
                <div className='F2Title'>Elevating Card Programs with Cutting-Edge Technology</div>
                <div className='F2paratext'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <div className='F2btn'>
                    Compare all Pro features
                    <img src={ArrowRight} alt=''/>
                    </div>  
                </div>
            </div>
        <div className='F2Cloumn'>
            <div className='Image1'>
                <img src={mobile} alt='mobile' className='Imgedit1'/>
            </div>
            <div className='Image2'>
            <img src={cardinfo} alt='mobile' className='Imgedit2'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Feature2
