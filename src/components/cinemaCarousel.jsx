import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import avatars from '/img/cgi/cinema/avatars.png';
import objects from '/img/cgi/cinema/interactiveobject.png';
import lightbutton from '/img/cgi/cinema/lightbutton.png';
import phone from '/img/cgi/cinema/phone.png';
import screen from '/img/cgi/cinema/screen.png';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        //style={{ ...style, background: "gray", color: "gray"}}
        onClick={onClick}
      />
    );
  }


function CinemaCarouselVariableWidth() {
    const settings = {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: true,
      margin: 5,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div className="slider-container">
        <Slider {...settings}>
          <div style={{ width: 430}}>
            <p style={{margin: '5px'}}>
                <img src={avatars}/>
            </p>
          </div>
          <div style={{ width: 256}}>
            <p style={{margin: '5px'}}>
                <img src={objects}/>
            </p>
          </div>
          <div style={{ width: 365}}>
            <p style={{margin: '5px'}}>
                <img src={lightbutton}/>
            </p>
          </div>
          <div style={{ width: 215}}>
            <p style={{margin: '5px'}}>
                <img src={phone}/>
            </p>
          </div>
          <div style={{ width: 355}}>
            <p style={{margin: '5px'}}>
                <img src={screen}/>
            </p>
          </div>
        </Slider>
      </div>
    );
  }
  
export default CinemaCarouselVariableWidth;
