
import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'
function header() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">MY HOME</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/postUser">Post User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default header;
