import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Navigation() {
  return (
    <>
      <Navbar className="navbar sticky-top" bg="light" expand="lg">
        <Navbar.Brand className="navbar-brand" href="#home">
          Venegas Maxwell Homes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-links" href="/services">
              Our Services
            </Nav.Link>
            <Nav.Link className="nav-links" href="#link">
              About
            </Nav.Link>
          </Nav>
          <Button className="navbar-button">Contact Us</Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
