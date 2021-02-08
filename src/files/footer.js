import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../App.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <>
      <Row className="footer">
        <Col sm={0} md={1}></Col>
        <Col md={3}>
          <a href="/services" className="footer-text">
            Services
          </a>
          <a href="/about" className="footer-text">
            About
          </a>
        </Col>
        <Col sm={0} md={1}></Col>
        <Col md={2} style={{ minWidth: "50px" }}>
          <a
            className="footer-nav-icons"
            href="https://www.instagram.com/venegasmaxwellhomes/?hl=en"
          >
            <FaInstagram size="35" />
          </a>
          <a
            className="footer-nav-icons"
            href="https://www.facebook.com/venegasmaxwellhomes/"
          >
            <FaFacebookF size="35" />
          </a>
        </Col>
        <Col sm={0} md={1}></Col>
        <Col md={3} className="footer-required">
          <a
            className="footer-text"
            href="https://drive.google.com/file/d/1tMAPn7Il15kPWOTRHZtBuxIu34AAXDLc/view"
          >
            Information About Brokerage Services
          </a>
          <br />
          <Image className="footer-fathom" fluid src="fathom-logo.png"></Image>
        </Col>
        <Col sm={0} md={1}></Col>
      </Row>
    </>
  );
}

export default Footer;
