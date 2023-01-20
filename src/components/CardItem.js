import React from 'react'
import {Link} from 'react-router-dom';


function CardItem() {
  return (
        <>
            <li className='cards_item'>
                <Link className='cards_item_link'>
                    <figure className='card_item_svg'>
                        <img src='images/morning.png' alt='Dubai' className='cards_item_ing'/>
                        <figcaption> Morning</figcaption>
                    </figure>
                    <div className='cards_item_info'>
                        <h5 className='cards_item_text'>
                            First Service: 7am to 9am
                        </h5>
                        <h5 className='cards_item_text'> 
                            Second Service: 9am to 11am
                        </h5>
                    </div>
                </Link>
            </li>
                <h1> Our Core beleifs</h1>
            <li className='cards_item-moon'>
                <Link className='cards_item_link'>
                    <figure className='card_item_svg'>
                    <i class="fa-solid fa-hand-fist"></i>
                        <figcaption> PRAISE</figcaption>
                    </figure>
                    <div className='cards_item_info'>
                        <h5 className='cards_item_text'>
                        2 Chro. 20:20-22;
                        </h5>
                        <h5 className='cards_item_text'> 
                        Ps. 67:1-7; 149:1-9
                        </h5>
                    </div>
                </Link>
            </li>
            <li className='cards_item-moon'>
                <Link className='cards_item_link'>
                    <figure className='card_item_svg'>
                    <i class="fa-solid fa-place-of-worship"></i>
                        <figcaption> FAITH</figcaption>
                    </figure>
                    <div className='cards_item_info'>
                        <h5 className='cards_item_text'>
                        1 John 5:4
                        </h5>
                        <h5 className='cards_item_text'> 
                        Eph. 6:16
                        </h5>
                    </div>
                </Link>
            </li>
            <li className='cards_item-moon'>
                <Link className='cards_item_link'>
                    <figure className='card_item_svg'>
                    <i class="fa-solid fa-brain"></i>
                        <figcaption> WISDOM</figcaption>
                    </figure>
                    <div className='cards_item_info'>
                        <h5 className='cards_item_text'>
                        Prov. 24:3-4
                        </h5>
                        <h5 className='cards_item_text'> 
                        Isaiah 33:6
                        </h5>
                    </div>
                </Link>
            </li>
         </>
  )
}

export default CardItem
