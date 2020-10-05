import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSignOut, useAuthUser, useIsAuthenticated } from "react-auth-kit";

const NavBar = () => {
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const signOut = useSignOut()

  const onSignOut = () => signOut();

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
          {isAuthenticated() ? (
            <NavDropdown title={auth().username} id="basic-nav-dropdown">
              <NavDropdown.Item onClick={onSignOut} >Sign Out</NavDropdown.Item>
            </NavDropdown>
          ) : (
            <>
              <Nav.Link as={Link} to="/signin">
                Sign In
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Sign Up
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
