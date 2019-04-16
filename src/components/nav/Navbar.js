import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Link } from 'react-bootstrap';

export default class CustomNavbar extends Component {
  render() {
    return (
        <Navbar expand="lg">
        <Navbar.Header>
            <Navbar.Brand>
                <Link to="/">
                    <Image src={Logo} fluid />
                </Link>
            </Navbar.Brand>
            <Navbar.Toggle />          
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav pullRight>
                <Link to="/">
                    <NavItem>Viaje Interior</NavItem>
                </Link>
                <Link to="/terapia">
                    <NavItem>Terapia</NavItem>
                </Link>
                <Link to="/preguntasfrecuentes">
                    <NavItem>Pretguntas Frecuentes</NavItem>
                </Link>
                <Link to="/Contacto">
                    <NavItem>Contacto</NavItem>
                </Link>  
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}



