import React from 'react'
import ThermometerImage from '../../assets/big_thermometer.png'
import thermometer from '../../assets/thermometer.svg'

import "./Aboutus.css"

const Aboutus = () => {
  return (
    <div className='bg flex__center section__padding' id="aboutus">
        <div className='aboutus-content flex__center'>

            <div className='aboutus-content_about'>
                <h2 className='headtext'>About Us</h2>
                <img src={thermometer} alt="about_thermometer" className='thermometer__img' />
                <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy Text Ever Since The 1500s</p>
                <button type='button' className='custom_button'>Know More</button>
            </div>
            
            <div className='aboutus-content_thermometer flex__center'>
              <img src={ThermometerImage} alt="big thermometer" />
            </div>

            <div className='aboutus-content_history'>
                <h2 className='headtext'>Our History</h2>
                <img src={thermometer} alt="about_thermometer" className='thermometer__img' />
                <p>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy Text Ever Since The 1500s</p>
                <button type='button' className='custom_button'>Know More</button>
            </div>



        </div>
    </div>
  )
}

export default Aboutus