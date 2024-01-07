import React from 'react'
import './Feature1.css'
import ArrowRight from '../../Assets/Rarrow.png'
import Globe from '../../Assets/Globe.png'
import Lock from '../../Assets/Lock.png'
import Key from '../../Assets/Key.png'

const Feature1 = () => {
  return (
    <div className='Feature1'>
        <div className='F1Container'>
            <div className='Frow'>
                <div className='Fsubtitle'>
                    <div className='Fcontent'>
                        <div className='FTitle'>Elevating Card Programs with Cutting-Edge Technology</div>
                        <div className='Fparatext'>consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                        <div className='Fbtn'>
                            Compare all Pro features
                            <img src={ArrowRight} alt=''/>
                        </div>
                    </div>
                </div>
                <div className='Fcloumn'>
                    <div className='Fcoloumn1'>
                        <img src={Globe} alt='Globe' className='FCimg1'/>
                        <h5 className='h5text1'>Globally Accepted</h5>
                        <p className='Fptext1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </div>
                    <div className='Fcoloumn1'>
                    <img src={Key} alt='Globe' className='FCimg2'/>
                        <h5 className='h5text2'>Biometric Integrated</h5>
                        <p className='Fptext2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </div>
                    <div className='Fcoloumn1'>
                    <img src={Lock} alt='Globe' className='FCimg3'/>
                        <h5 className='h5text3'>Fully Secured</h5>
                        <p className='Fptext3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feature1
