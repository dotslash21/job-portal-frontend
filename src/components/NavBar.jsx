import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Job Portal
        </Navbar.Brand>

        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/postjob">
            Post Job
          </Nav.Link>
          <Nav.Link as={Link} to="/viewjobs">
            View Jobs
          </Nav.Link>
        </Nav>

        <Nav>
          <Nav.Link as={Link} to="/signin">
            Sign In
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            Sign Up
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
