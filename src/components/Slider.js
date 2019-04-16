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
      className: "center",
      centerMode: true,
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
          <div className="center-item">
            <Image src={seagull}  />
          </div>
          <div>
          <Image src={rubicks}  />
          </div>
          <div>
          <Image src={cupid}  />
          </div>
          <div>
          <Image src={lock}  />
          </div>
        </Slider>
        </Styles>
      </div>
    );
  }
}

export default SimpleSlider;