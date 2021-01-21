import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Footer() {
  return (
    <>
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

export default Footer;
