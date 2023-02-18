import React from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const [user1, loading1, error1] = useAuthState(auth);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Tour Maja</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  href="/about">About Me</Nav.Link>
              <Nav.Link href="#pricing">Our Services</Nav.Link>
              <Nav.Link href="#pricing">Popular Destination</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
              {
                user1 ?
                  <Nav.Link onClick={() => signOut()} as={Link} to="/">
                    Sign Out
                  </Nav.Link>
                  :
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;