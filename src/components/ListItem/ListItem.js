import React from 'react'

import './ListItem.css'

const ListItem = (props) => {
  return (
    <div className='listitem'>
        <p className='p__dancing'>{props.title}</p>
        <p>{props.description}</p>
    </div>
  )
}

export default ListItem