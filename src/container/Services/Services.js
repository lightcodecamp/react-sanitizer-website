import React from 'react'

import Sanitizer from '../../assets/sanitizer.png'
import SubHeading from '../../components/SubHeading/SubHeading'
import ListItem from '../../components/ListItem/ListItem'

import './Services.css'


const services = [
    {
      title: "House Sanitizing",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
    },
    {
      title: "Industry Sanitizing",
      description: "eiusmod tempor incididunt dolor sit amet, consectetur.",
    },
    {
      title: "Hospital Sanitizing",
      description: "consectetur adipiscing elit, sed do eiusmod tempor",
    },
  ];
  
  const processes = [
    {
      title: "Preparation",
      description: "Clean the surface with an appropriate cleaner.",
    },
    {
      title: "Water Cleaning",
      description:
        "After cleaning, thoroughly rinse the surface with clean water.",
    },
    {
      title: "Sanitizing",
      description: "Apply a sanitizing solution to the surface",
    },
  ];

const Services = () => {
  return (
    <div className='services flex__center section__padding' id='services'>
        <div className='services-title'>
            <SubHeading title="services" />
            <h1 className='headtext'>Get The Best Services</h1>
        </div>

        <div className='services-list'>
            <div className='services-list_content flex__center'>
                <p className='services-list_heading'>Sanitizing services</p>
                <div className='services_list_items'>
                    {services.map((service, index) => (
                        <ListItem key={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>

            <div className='services-list_img'>
                <img src={Sanitizer} alt="sanitizer__img" />
            </div>

            <div className='services-list_content flex__center'>
                <p className='services-list_heading'>Our Working Process</p>
                <div className='services_list_items'>
                    {processes.map((service, index) => (
                        <ListItem key={index} title={service.title} description={service.description} />
                    ))}
                </div>
            </div>
        </div>


        <div style={{marginTop: 15}}> 
          <button type='button' className='custom_button'>View More</button>
        </div>
    </div>
  )
}

export default Services