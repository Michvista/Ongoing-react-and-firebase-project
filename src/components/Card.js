import React from 'react'

import './card.css'
import CardItem from './CardItem'

function Card() {
  return (
    <div className='cards'>
      <h1> Sunday Services</h1>
        <div className='cards_container'>
            <div className='cards_wrapper'>
                <ul className='cards_items'>
                   <CardItem/>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Card
