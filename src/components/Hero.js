import React from 'react'
import './hero.css'
import '../App.css'
// import App from '../App'
import './Slide'
import Slide from './Slide'

function Hero () {
    // const Title1 = 'Hebrews 1:3';
    // const Title2 = 'Timothy 2:19';
    // const Title3 = '1 John 5:4';
    // const verses = [
    //     { id:0, value:{Title1} + "The Son is the radiance of God's glory and the exact representation of his being, sustaining all things by his powerful word. After he had provided purification for sins, he sat down at the right hand of the Majesty in heaven." },
    //     { id:1, value:{Title2} + "Nevertheless the foundation of God standeth sure, having this seal, The Lord knoweth them that are his. And, let every one that nameth the name of Christ depart from iniquity." },
    //     { id:2, value:{Title3} + "1 John 5:4" }
    // ]
    // const lists = [
    //   {
    //    name: 'Jogn',
    //   age : 'phillip',
    //   height: 'peter'
    //   }
    //  ]
  return (
    //     {lists.map((item)=> (
    //   <>
    //     <h4> {item.name}</h4>
    //     <h5> {item.age}</h5>
    //     <h6>{item.height} </h6> 
    //   </>
    //  ) ) }
    <>
      <div className='hero-container'>
        <div className='heroText'>
    <Slide/>
  <h1> WELCOME TO WINNERS <br/> CHURCH IKORODU</h1>
  </div>
  </div>
    </>
  )
}


export default Hero
