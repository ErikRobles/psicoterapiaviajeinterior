import React, { Component } from 'react'
import Slider from './Slider';
import { Container } from 'react-bootstrap';





class CustomHeader extends Component {
  render() {
    return (
      <Container>
        <Slider />
      </Container>
    )
  }
}

export default CustomHeader;