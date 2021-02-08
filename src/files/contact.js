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
            <ul>
              <li className="person-list">
                <span className="emphasis">Julie Venegas</span>
                <ul>
                  <li className="contact-email">
                    <a
                      className="footer-text"
                      href="mailto:julie@venegasmaxwellhomes.com"
                    >
                      julie@venegasmaxwellhomes.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:2147347889">(214) 734-7889</a>
                  </li>
                </ul>
              </li>
              <li className="person-list">
                <span className="emphasis">Sarah Maxwell</span>
                <ul>
                  <li className="contact-email">
                    <a
                      className="footer-text"
                      href="mailto:sarah@venegasmaxwellhomes.com"
                    >
                      sarah@venegasmaxwellhomes.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:3252079003">(325) 207-9003</a>
                  </li>
                </ul>
              </li>
            </ul>
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
