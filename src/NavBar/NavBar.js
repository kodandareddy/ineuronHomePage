import React, { useState } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from "reactstrap";
const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


  return (
    <Navbar container className="bg-navbar" expand="sm">
      <NavbarBrand href="/">
        <img
          className="brand-logo"
          src="https://ineuron.ai/images/ineuron-logo-white.png"
        />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">Courses</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Job Portal</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Internship</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Company</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavBar;
