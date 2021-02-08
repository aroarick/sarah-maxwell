import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Contact() {
  return (
    <>
      <Container>
        <Row>
          <Col lg={5}>
            <h1 className="title">Contact Us</h1>
            <p>
              If you have any questions or comments, please contact us via email
              or phone.
            </p>
            <br />
            <p className="emphasis">Email</p>
            <a
              className="footer-text"
              href="mailto:julie@venegasmaxwellhomes.com"
            >
              julie@venegasmaxwellhomes.com
            </a>
            <br />
            <a
              className="footer-text"
              href="mailto:sarah@venegasmaxwellhomes.com"
            >
              sarah@venegasmaxwellhomes.com
            </a>
            <br />
            <p className="emphasis">Phone</p>
            <p>
              <span className="emphasis">Julie Venegas </span>(214) 734-7889
            </p>
            <p>
              <span className="emphasis">Sarah Maxwell </span>(325) 207-9003
            </p>
          </Col>
          <Col>
            <Image fluid src="/together.jpg"></Image>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
