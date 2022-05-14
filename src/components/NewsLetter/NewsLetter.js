import React from 'react'

import SubHeading from '../SubHeading/SubHeading'

import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <div className='newsletter-heading'>
            <SubHeading title="Newsletter" />
            <h1 className='headtext'>Subscribe To Our Newsletter</h1>
            <p>And Never Miss Latest Updates!</p>
        </div>

        <div className='newsletter-input flex__center'>
            <input type="email" placeholder='Enter your email address' />
            <button type='button' className='custom_button'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter