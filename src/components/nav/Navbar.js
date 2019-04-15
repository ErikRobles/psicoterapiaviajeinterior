import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap';

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
                <LinkContainer to="./">
                    <NavItem>Viaje Interior</NavItem>
                </LinkContainer>
                <LinkContainer to="./terapia">
                    <NavItem>Terapia</NavItem>
                </LinkContainer>
                <LinkContainer to="./preguntasfrecuentes">
                    <NavItem>Pretguntas Frecuentes</NavItem>
                </LinkContainer>
                <LinkContainer to="./Contacto">
                    <NavItem>Contacto</NavItem>
                </LinkContainer>  
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}



