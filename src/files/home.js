import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Home() {
  return (
    <>
      <p className="home-mission">Our Mission</p>
      <h1 className="home-mission-statement">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aliquid
        odit, consequatur.
      </h1>
      <Container>
        <Row>
          <Col lg={1}></Col>
          <Col>
            <Image
              fluid
              src="https://images.unsplash.com/photo-1601758123927-4f7acc7da589?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            ></Image>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <Row className="home-row">
          <Col lg={1}></Col>
          <Col>
            <h1 className="home-text">Our Services</h1>
            <p>
              Need help packing up before moving, or unpacking once you get to
              your new home? Have some organizing or staging you need to get
              done? Are you looking to buy or sell your home? Come take a look
              at our services we offer and get what you need!
            </p>
          </Col>
          <Col lg={2}></Col>
          <Col lg={3}>
            <Button className="navbar-button">Our Services</Button>
          </Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col>
            <Image fluid src="/together.jpg"></Image>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <Row className="home-row">
          <Col lg={1}></Col>
          <Col>
            <h1 className="home-text">About</h1>
            <p>Like to get to know us? Take a look at our story!</p>
          </Col>
          <Col lg={2}></Col>
          <Col lg={3}>
            <Button className="navbar-button">Our Story</Button>
          </Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col>
            <Image
              fluid
              src="https://images.unsplash.com/photo-1501876725168-00c445821c9e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            ></Image>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <Row className="home-row">
          <Col lg={1}></Col>
          <Col>
            <h1 className="home-text">About</h1>
            <p>Need to get in touch? Contact us!</p>
          </Col>
          <Col lg={2}></Col>
          <Col lg={3}>
            <Button className="navbar-button">Contact Us</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
