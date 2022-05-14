import React, {useState} from 'react'
import  { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../../assets/logo.png'

import './Navbar.css'

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='navbar'>
        <img src={Logo} alt="Logo" />

        <ul className='navbar-links'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#aboutus'>About</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#prevention'>prevention</a></li>
            <li><a href='#contact'>contact</a></li>
        </ul>

        <div className='navbar-login'>
            <a href='#login'>Log In / sign Up</a>
            <div></div>
            <a href='#'>Book Now</a>
        </div>

        <div className='navbar-smallscreen'>
            <GiHamburgerMenu color='#fff' fontSize={27} onClick={() =>{setToggleMenu(true)}} />

            {toggleMenu && (

            <div className='navbar-smallscreen_overlay flex__center'>
              <AiOutlineClose fontSize={27} className="overlay__close" onClick={() => {setToggleMenu(false)}} />

              <ul className='navbar-smallscreen-links'>
                <li><a href='#home' onClick={() => {setToggleMenu(false)}}>Home</a></li>
                <li><a href='#aboutus' onClick={() => {setToggleMenu(false)}}>About</a></li>
                <li><a href='#services' onClick={() => {setToggleMenu(false)}}>Services</a></li>
                <li><a href='#prevention' onClick={() => {setToggleMenu(false)}}>prevention</a></li>
                <li><a href='#contact' onClick={() => {setToggleMenu(false)}}>contact</a></li>
              </ul>

            </div>
            )}


        </div>
    </div>
  )
}

export default Navbar