import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Verses} from '../data.js';
import './slide.css'
function Slide  () {
   
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
          />
        );
      }
      const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />,
          pauseOnHover: true,
          appendDots: dots => (
            <div style = {{
                backgroundColor: '#fff',
                borderRadius : '10px',
                width: '500px',
                padding : '10px',
                
                // marginTop : '40px',
                // position : 'relative',
                // left: '1rem'
            }}
            >
                <ul style={{margin:'0px'}} > {dots} </ul>
            </div>
          ),
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4
            }
          }
        ]
      };
      return (
        <>
        <div className='apps'>
          <Slider {...settings}>
        {Verses.map((item) => (
        <div className='card'>
          <div className='card-top'>
            <h4> {item.title} </h4>
          </div>
          <div className='card-bottom'>
            <p>
              {item.quote}
            </p>
          </div>
        </div>
        ))}
          </Slider>
        </div>
        </>
       
      );
  
}

export default Slide
