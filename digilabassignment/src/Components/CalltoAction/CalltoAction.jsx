import React from 'react'
import './CalltoAction.css'
import Creditcard from '../../Assets/Creditcard.png'
import headphones from '../../Assets/headphones.png'

const CalltoAction = () => {
  return (
    <div className='Calltoaction'>
      <div className='CalltoactionContainer'>
        <div className="CTtitle">
        Unlock Limitless Possibilities with Our New Card Solutions
        </div>
        <div className="CTButtons">
        <div className='CTbtn1'>
            Unlock your Card
            <img src={Creditcard} alt=''/>
        </div>
        <div className='CTbtn2'>
        Customer support
          <img src={headphones} alt=''/>
        </div>
        </div>
      </div>
      
    </div>
  )
}

export default CalltoAction
