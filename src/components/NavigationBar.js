import React, { Component } from 'react';
import { Navbar, Nav, NavItem, MenuItem } from 'react-bootstrap';


class Header extends Component {
  render() {
    return (
      <Navbar fixedTop>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">Logo Image</a>
            </Navbar.Brand>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#">Home</NavItem>
                <NavItem eventKey={2} href="#">About</NavItem>
                <NavItem eventKey={3} href="#">Contact</NavItem>
            </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;