import React, { Component } from "react";
import Slider from "react-slick";
import seagull from '../assets/img/seagull.png';
import rubicks from '../assets/img/rubicks.png';
import cupid from '../assets/img/cupid.png';
import lock from '../assets/img/lock.png';
import { Image } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .sliderElement {
     padding-top: 100px;
   }
`;



class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      autoplay: true,
      speed: 6000,
      slidesToShow: 1,
      adaptiveHeight: true,
      fade: true,
    };

    return (
      <div>
        <Styles>
        <Slider {...settings} className="sliderElement">
          <div>
            <Image src={seagull} fluid />
          </div>
          <div>
          <Image src={rubicks} fluid />
          </div>
          <div>
          <Image src={cupid} fluid />
          </div>
          <div>
          <Image src={lock} fluid />
          </div>
        </Slider>
        </Styles>
      </div>
    );
  }
}

export default SimpleSlider;