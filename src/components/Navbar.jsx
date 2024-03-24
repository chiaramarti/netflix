import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Button, Dropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import logo from '../assets/media/netflix_logo.png'; 
import avatar from '../assets/media/avatar.png';

function NavigationBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary"  bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Brand href="#" className="text-danger fw-bold">
          <img src={logo} height={40}
          className="d-block align-top my-0 py-0" alt="netflix" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 text-center" style={{ maxHeight: '100px' }} navbarScroll>
            <Nav.Link as={Link} to="#">Home</Nav.Link>
            <Nav.Link as={Link} to="#" className="active">TV Shows</Nav.Link>
            <Nav.Link as={Link} to="#">Movies</Nav.Link>
            <Nav.Link as={Link} to="#">Recently Added</Nav.Link>
            <Nav.Link as={Link} to="#">My List</Nav.Link>
          </Nav>
          <div className="d-flex flex-row justify-content-center">
          <button class="btn bg-trasparent" type="submit">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                />
              </svg>
              </button>
            <span className="nav-item text-secondary d-flex align-items-center mx-1">
              <Nav.Link as={Link} to="#" className="text-uppercase fs-6 fw-semibold text-white">Kids</Nav.Link>
            </span>
            <button class="btn bg-trasparent" type="submit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"
                />
              </svg>
              </button>
            <span className="nav-item dropdown mx-2">
              <Dropdown>
                <Dropdown.Toggle as={Nav.Link} id="avatar-dropdown">
                  <img src={avatar} alt="avatar" width="40" className="" />
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-dark">
                  <Dropdown.Item href="account.html">Account</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item href="settings.html">Settings</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
