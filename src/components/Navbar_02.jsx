import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';



function Navbar_02() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark px-5">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <Navbar.Brand as={Link} to="/tv-shows" className="fs-2">TV Shows</Navbar.Brand>
          <div className="mx-3 py-1 mt-2" id="navbarNavDarkDropdown">
            <Nav className="navbar-nav">
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle as={Nav.Link} className="text-white fs-6 px-2 py-0 m-1 bg-black border" id="genres-dropdown">
                  Genres
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-dark">
                  <Dropdown.Item href="#">Action</Dropdown.Item>
                  <Dropdown.Item href="#">Dramatic</Dropdown.Item>
                  <Dropdown.Item href="#">Love</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </div>
        </div>
        <div className="d-flex">
          <Nav className="navbar-nav">
            {/* <Nav.Item className="btn-bk px-4">
            <i className="bi-list"></i>
            </Nav.Item>
            <Nav.Item className="btn-bk px-4">
              <i className="bi bi-grid-fill text-white fs-6"></i>
            </Nav.Item> */}
          </Nav>
        </div>
      </div>
    </Navbar>
  );
}

export default Navbar_02;
