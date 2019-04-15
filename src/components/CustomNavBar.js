import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../assets/img/headerlogo.png';
import styled from 'styled-components';


const Styles = styled.div`
    .navbar {
        background-color: #25a7d9;
    }

   .navbar-brand, .navbar-nav .nav-link {
       color: white;
       padding-bottom: 15px;

       &:hover {
           color: #bbb;
       }
   }

   @media (max-width: 992px) {
   .navbar-expand-lg  {
       background-color: #25a7d9; 
   }
   .navbar-light {
       margin-bottom: 15px;
   }
}

@media (max-width: 480px) {
    .navbar-brand img {
        width: 270px;
    }

} 

`;

class CustomNavBar extends Component {
  render() {
    return (
        <Styles>
        <Navbar collapseOnSelect expand="lg" fixed="top" variant="dark">
        <Navbar.Brand href="/"><img src={logo} alt="logo de psicoterapia" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-bav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Viaje Interior</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Terapia">Terapia</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/PreguntasFrecuentes">Preguntas Frecuentes</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/Contacto">Contacto</Nav.Link></Nav.Item>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
        </Styles>
    )
  }
}

export default CustomNavBar;