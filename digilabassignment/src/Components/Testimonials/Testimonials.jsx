import React from 'react'
import './Testimonials.css'
import CompanyLogo from '../../Assets/Companylogo.png'
import AvatarDp from '../../Assets/AvatarDp.png'
import Ratings from '../../Assets/Rating.png'

const Testimonials = () => {
  return (
    <div className='Testimonials'>
      <div className='Tcontainer'>
        <div className='Trow'>
          <div className='Tcolumn'>
            <div className="Tcontent">
              <div className='Tlogo'>
                <img src={CompanyLogo} alt=''/>
              </div>
              <div className='Ttext'>
              I had the pleasure of experiencing the next generation of card solutions with this incredible product. 
              It's refreshing to see such innovation in the financial industry.
              </div>
            </div>
            <div className='TAvatar'>
              <div className='AvatarLogo'>
                <img src={AvatarDp} alt=''/>
              </div>
              <div className='AvatarName'>Nick Babich</div>
              <div className='AvatarDesignation'>Lead Designer</div>
              <div className='AvatrRatings'>
                <img src={Ratings} alt=''/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
