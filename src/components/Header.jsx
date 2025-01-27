import React, { useState } from "react";
import "../styles/header.scss";
import logo from "../assets/images/logo1.png";
import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="header pb-2">
      <Container>
        <Navbar expand="lg" variant="dark" className="d-flex justify-content-between align-items-center px-2 py-1 position-relative">
          <Navbar.Brand href="#" className="p-0">
            <img src={logo} alt="Inspaire Logo" className="logo position-absolute" />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarNav"
            onClick={() => setIsNavOpen(!isNavOpen)}
            className={isNavOpen ? "collapsed" : ""}
          />
          <Navbar.Collapse id="navbarNav" className={isNavOpen ? "show" : ""}>
            <Nav className="ms-auto">
              <Nav.Link href="#" onClick={() => setIsNavOpen(false)}>Home</Nav.Link>
              <Nav.Link href="#" onClick={() => setIsNavOpen(false)}>About Us</Nav.Link>
              <Nav.Link href="#" onClick={() => setIsNavOpen(false)}>Portfolio</Nav.Link>
              <Nav.Link href="#" onClick={() => setIsNavOpen(false)}>Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
