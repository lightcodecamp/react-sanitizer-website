import React from 'react'

import SubHeading from '../../components/SubHeading/SubHeading'
import findus from '../../assets/findus.png'

const FindUs = () => {
  return (
    <div className='bg wrapper section__padding' id="contact">
        <div className='wrapper_img wrapper_img-reverse'>
            <img src={findus} alt="findus_img" />
        </div>
        
        <div className='wrapper_info'>
            <SubHeading title="Contact" />
            <h1 className='headtext' style={{marginBottom: "3rem"}}>Find Us</h1>

            <div className='wrapper-content'>
                <p>1515 NW 167th Street Suite 410 Miami, FL. 33169</p>
                <p className='p__dancing' style={{color: "#DCCA87", margin: "2rem 0"}}>Opening Hours</p>
                <p>Mon - Fri: 9:00 Am - 5:00 Pm</p>
                <p>Sat - Sun: 9:00 Am - 3:00 Pm</p>
            </div>

            <button type='button' className='custom_button' style={{marginTop: "2rem"}}>Visit Us</button>
        </div>
    </div>
  )
}

export default FindUs