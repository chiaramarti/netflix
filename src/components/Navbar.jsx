import React from 'react';
import { Navbar as BootstrapNavbar } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" variant="dark">
      <BootstrapNavbar.Brand href="/">Netflix Clone</BootstrapNavbar.Brand>
    </BootstrapNavbar>
  );
};

export default Navbar;
