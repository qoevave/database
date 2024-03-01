import React from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import bats from '/img/cgi/cave/bats.png';
import bridges from '/img/cgi/cave/bridges.png';
import lantern from '/img/cgi/cave/lantern.png';
import mushrooms from '/img/cgi/cave/mushrooms.png';
import spider from '/img/cgi/cave/spider.png';
import walkietalkie from '/img/cgi/cave/walkie-talkie.png';
import pond from '/img/cgi/cave/pond.png'

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


function CaveCarouselVariableWidth() {
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
          <div style={{ width: 400}}>
            <p style={{margin: '5px'}}>
                <img src={bats}/>
            </p>
          </div>
          <div style={{ width: 336}}>
            <p style={{margin: '5px'}}>
                <img src={bridges}/>
            </p>
          </div>
          <div style={{ width: 317}}>
            <p style={{margin: '5px'}}>
                <img src={lantern}/>
            </p>
          </div>
          <div style={{ width: 361}}>
            <p style={{margin: '5px'}}>
                <img src={pond}/>
            </p>
          </div>
          <div style={{ width: 370}}>
            <p style={{margin: '5px'}}>
                <img src={mushrooms}/>
            </p>
          </div>
          <div style={{ width: 228}}>
            <p style={{margin: '5px'}}>
                <img src={spider}/>
            </p>
          </div>
          <div style={{ width: 366}}>
            <p style={{margin: '5px'}}>
                <img src={walkietalkie}/>
            </p>
          </div>
        </Slider>
      </div>
    );
  }
  
export default CaveCarouselVariableWidth;
