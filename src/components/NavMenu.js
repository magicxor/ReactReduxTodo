import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavDropdown, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const NavMenu = props => (
  <Navbar bg="light" expand="lg" className="flex-column">
    <Navbar.Brand href="#">ReactReduxTodo</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link href="#"><FontAwesomeIcon icon='home' /> Task list</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
