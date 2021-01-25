import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import "../App.css";

function Navigation() {
  return (
    <>
      <Navbar className="navbar sticky-top" expand="lg">
        <Navbar.Brand className="navbar-brand" href="/">
          <Image className="nav-logo" fluid src="/logo.png"></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-links" href="/services">
              Services
            </Nav.Link>
            <Nav.Link className="nav-links" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="nav-links" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Button href="listings" className="navbar-button">
            Listings
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
