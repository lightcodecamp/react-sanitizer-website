import React from 'react'

import SubHeading from '../../components/SubHeading/SubHeading'
import preventionImage from '../../assets/prevention.png'

import './Prevention.css'

const preventionData = [
    {
      title: "Wash Your Hand",
      description:
        "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.",
    },
    {
      title: "Clean & Disinfect",
      description:
        "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.",
    },
    {
      title: "Avoid Contact With Sick",
      description:
        "Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.",
    },
  ];


  const PreventionList = ({data: {title, description}}) => (
      <div className='prevention-list'>
          <p className='p__dancing' style={{color: "#DCCA87"}}>{title}</p>
            <p>{description}</p>
      </div>
  )
  

const Prevention = () => {
  return (
    <div className='bg wrapper section__padding' id="prevention">
        <div className='wrapper_info'>
            <SubHeading title="Prevention" />
            <h1 className='headtext'>Covid 19 Prevention Tips</h1>

            {preventionData.map((data, index) => (
                <PreventionList key={index} data={data} />
            ))}
        </div>

        <div className='wrapper_img'>
                <img src={preventionImage} alt="Prevention_img" />
        </div>
        
    </div>
  )
}

export default Prevention