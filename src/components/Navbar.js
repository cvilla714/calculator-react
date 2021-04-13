/* eslint-disable object-curly-newline */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Math Magicians</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Calculator</Nav.Link>
          <Nav.Link href="#home">Quote</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
