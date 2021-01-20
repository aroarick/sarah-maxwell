import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

function App() {
  return (
    <>
      <Navbar className="navbar sticky-top" bg="light" expand="lg">
        <Navbar.Brand className="navbar-brand" href="#home">
          Sarah Maxwell Broker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav-links" href="#home">
              Listings
            </Nav.Link>
            <Nav.Link className="nav-links" href="#link">
              About
            </Nav.Link>
          </Nav>
          <Button className="navbar-button">Contact Us</Button>
        </Navbar.Collapse>
      </Navbar>
      <p className="home-mission">Our Mission</p>
      <h1 className="home-mission-statement">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid
        odit, consequatur.
      </h1>
      <Row>
        <Col lg={1}></Col>
        <Col>
          <Image
            fluid
            src="https://images.unsplash.com/photo-1463620910506-d0458143143e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          ></Image>
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Row className="home-residental-row">
        <Col lg={1}></Col>
        <Col>
          <h1 className="home-residental">New York House</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        </Col>
        <Col lg={1}></Col>
        <Col>
          <Button className="navbar-button">See Property</Button>
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Row>
        <Col lg={1}></Col>
        <Col>
          <Image
            fluid
            src="https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
          ></Image>
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Row className="home-residental-row">
        <Col lg={1}></Col>
        <Col>
          <h1 className="home-residental">Chicago Apartment</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </Col>
        <Col lg={1}></Col>
        <Col>
          <Button fluid className="navbar-button">
            See Property
          </Button>
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Row>
        <Col lg={1}></Col>
        <Col>
          <Image
            fluid
            src="https://images.unsplash.com/photo-1465224414649-ceb7f1db3999?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          ></Image>
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Row className="home-residental-row">
        <Col lg={1}></Col>
        <Col>
          <h1 className="home-residental">Dallas Condo</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Col>
        <Col lg={1}></Col>
        <Col>
          <Button fluid className="navbar-button">
            See Property
          </Button>
        </Col>
        <Col lg={1}></Col>
      </Row>
      <Row className="footer">
        <Col>
          <h3 className="footer-title">Sarah Maxwell</h3>
          <p className="footer-text">123 Demo Street</p>
          <p className="footer-text">Dallas, TX 12345</p>
        </Col>
        <Col lg={5}></Col>
        <Col>
          <h3 className="footer-title">About</h3>
          <p className="footer-text">Work</p>
          <p className="footer-text">Who We Are</p>
          <p className="footer-text">Contact Us</p>
        </Col>
        <Col>
          <h3 className="footer-title">Properties</h3>
          <p className="footer-text">Houses</p>
          <p className="footer-text">Apartments</p>
          <p className="footer-text">Condos</p>
        </Col>
      </Row>
    </>
  );
}

export default App;
