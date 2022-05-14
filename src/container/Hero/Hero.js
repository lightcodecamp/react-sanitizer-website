import React from 'react'
import Welcome from '../../assets/welcome.png'
import SubHeading from '../../components/SubHeading/SubHeading'

import './Hero.css'

const Hero = () => {
  return (
    <div className='header wrapper section__padding' id="home">
        <div className='wrapper_info'>
            <SubHeading title="Stay Clean" />

            <h1 className='title'>Cleaning And Sanitizing</h1>
            <p style={{margin: "2rem 0"}}>
            Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industrys Standard Dummy Text Ever Since The 1500s
            </p>

            <button type='button' className='custom_button'>Get service now</button>
        </div>

        <div className='wrapper_img'>
            <img src={Welcome} alt="header_img" />
        </div>
    </div>
  )
}

export default Hero