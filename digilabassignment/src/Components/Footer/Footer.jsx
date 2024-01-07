import React from 'react'
import './Footer.css'
import Logo1 from '../../Assets/Logo1.png';
import Social from '../../Assets/Socialicons.png';

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='FooterContainer'>
        <div className="Footerow">
          <div className="footercontent1">
            <div className="content1start">
              <div className="fmainlogo"><img src ={Logo1} alt=''/></div>
              <div className="fmaincontent">Mode UI is a comprehensive design system that empowers designers and developers to create cohesive 
              and visually stunning user interfaces across various platforms and devices</div>
            </div>
            <div className="divider"></div>
            <div className="content1end">
              <div className="company">
                <ul className='Companyylist'>Company
                  <li className='litagname'>About us</li>
                  <li className='litagname'>Pricing</li>
                  <li className='litagname'>Contact us</li>
                  <li className='litagname'>Features</li>
                </ul>
              </div>

              <div className="company">
                <ul className='Companyylist'>Product
                  <li className='litagname'>Figma design system</li>
                  <li className='litagname'>Ios kit</li>
                  <li className='litagname'>Android kit</li>
                  <li className='litagname'>Wireframe</li>
                </ul>
              </div>

              <div className="company">
                <ul className='Companyylist'>Resources
                  <li className='litagname'>Templates</li>
                  <li className='litagname'>Landing pages</li>
                  <li className='litagname'>Documentation</li>
                  <li className='litagname'>Comp library</li>
                </ul>
              </div>

              <div className="company">
                <ul className='Companyylist'>Legal
                  <li className='litagname'>Privacy policy</li>
                  <li className='litagname'>Terms & Conditions</li>
                  <li className='litagname'>Disclaimer</li>
                  <li className='litagname'>Affiliate programme</li>
                </ul>
              </div>

              <div className="company">
                <ul className='Companyylist'>Support
                  <li className='litagname'>Help centre</li>
                  <li className='litagname'>Raise ticket</li>
                  <li className='litagname'>Report</li>
                  <li className='litagname'>Refund</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footercontent2">
            <div className="socialicons">
              <img src ={Social} alt=''/>
            </div>
            <div className="copyrighttext">© 2023 Mode UI  Inc. All Rights Reserved.</div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
