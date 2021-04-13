/* eslint-disable object-curly-newline */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="top">
      <Navbar.Brand href="#home" className="main-title text-warning ml-lg-5">
        Math Magicians
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="">
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link href="#link">
            {' '}
            <Link to="/calculator">Calculator</Link>
          </Nav.Link>
          <Nav.Link href="#home">
            <Link to="/quote">Quote</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
