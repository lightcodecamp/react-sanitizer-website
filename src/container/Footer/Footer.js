import React from 'react'

import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import thermometer from '../../assets/thermometer.svg'
import logo from '../../assets/logo.png'
import './Footer.css'

import NewsLetter from '../../components/NewsLetter/NewsLetter'

const Footer = () => {
  return (
    <div className='footer section__padding' id="login">
        <NewsLetter />

        <div className='footer-links'>
            <div className='footer-links_contact'>
                <h1 className='footer-headtext'>Contact us</h1>
                <p>1515 NW 167th Street Suite 410 Miami, FL. 33169</p>
                <p>+1 212-344-1230</p>
                <p>+1 212-555-1230</p>
            </div>

            <div className='footer-links_logo'>
                <img src={logo} alt="footer_logo" />
                <p>&quot;No Wait. Fast Results. That's Our Commitment To You.&quot;</p>
                <img src={thermometer} className="thermometer__img" style={{marginTop: 15}} />

                <div className='footer-links_icons'>
                    <FiFacebook />
                    <FiTwitter />
                    <FiInstagram />
                </div>
            </div>

            <div className='footer-links_work'>
                <h1 className='footer-headtext'>Working Hours</h1>
                <p>Monday-Friday:</p>
                <p>9:00 Am - 5:00 Pm</p>
                <p>Saturday-Sunday:</p>
                <p>9:00 Am - 3:00 Pm</p>
            </div>
        </div>

        <div className='footer__copyright'>
                <p>2022 Sanitizer. All Rights Reserved.</p>
            </div>
    </div>
  )
}

export default Footer