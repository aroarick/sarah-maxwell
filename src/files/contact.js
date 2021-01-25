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
            <p>julie@venegasmaxwellhomes.com</p>
            <br />
            <p className="emphasis">Phone</p>
            <p>(214) 734-7889</p>
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
