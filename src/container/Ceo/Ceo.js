import React from 'react'

import ceo from '../../assets/ceo.png'
import quote from '../../assets/quote.png'
import sign from '../../assets/sign.png'

import SubHeading from '../../components/SubHeading/SubHeading'

import './Ceo.css'

const Ceo = () => {
  return (
    <div className='bg wrapper section__padding'>
        <div className='wrapper_img wrapper_img-reverse'>
                <img src={ceo} alt="ceo_image" />
        </div>

        <div className='wrapper_info'>
            <SubHeading title="CEO's word" />
            <h1 className='headtext'>What we believe in</h1>

            <div className='ceo-content'>
                <div className='ceo-content_quote'>
                    <img src={quote} alt="quote_image" />
                    <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit.</p>
                </div>

                <p>Auctor Sit Iaculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc.</p>
            </div>

            <div className='ceo-sign'>
                <p>John Doe</p>
                <p>CEO & Founder</p>
                <img src={sign} alt="sign_image" />
            </div>

        </div>
    </div>
  )
}

export default Ceo