import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bottles from '/img/cgi/mansion/bottles.png';
import chess from '/img/cgi/mansion/chess.png';
import furniture from '/img/cgi/mansion/furniture.png';
import gramaphone from '/img/cgi/mansion/gramaphone.png';
import piano from '/img/cgi/mansion/piano.png';
import picture from '/img/cgi/mansion/picture.png';
import table from '/img/cgi/mansion/table.png';

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


function MansionCarouselVariableWidth() {
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
          <div style={{ width: 300}}>
            <p style={{margin: '5px'}}>
                <img src={bottles}/>
            </p>
          </div>
          <div style={{ width: 335}}>
            <p style={{margin: '5px'}}>
                <img src={piano}/>
            </p>
          </div>
          <div style={{ width: 325}}>
            <p style={{margin: '5px'}}>
                <img src={chess}/>
            </p>
          </div>
          <div style={{ width: 298}}>
            <p style={{margin: '5px'}}>
                <img src={furniture}/>
            </p>
          </div>
          <div style={{ width: 210}}>
            <p style={{margin: '5px'}}>
                <img src={gramaphone}/>
            </p>
          </div>
          <div style={{ width: 323}}>
            <p style={{margin: '5px'}}>
                <img src={picture}/>
            </p>
          </div>
          <div style={{ width: 355}}>
            <p style={{margin: '5px'}}>
                <img src={table}/>
            </p>
          </div>
        </Slider>
      </div>
    );
  }
  
export default MansionCarouselVariableWidth;
