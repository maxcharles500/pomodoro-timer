import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";

function Navigation() {
  return (
    <>
     <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Focus</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link>
      <Link to="/home" >Home</Link>
      </Nav.Link>
      <Nav.Link>
      <Link to="/user">User</Link>
      </Nav.Link>
      <Nav.Link>
      <Link to="/completed">Completed Tasks</Link>
      </Nav.Link>
    </Nav>
    </Container>
  </Navbar>
    </>
  )
}

export default Navigation