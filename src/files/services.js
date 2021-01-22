import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Services() {
  return (
    <>
      <Container>
        <Row>
          <Col className="services-row">
            <h1 className="title">Services</h1>
            <p>
              It all begins with an idea. Maybe you want to launch a business.
              Maybe you want to turn a hobby into something more. Or maybe you
              have a creative project to share with the world. Whatever it is,
              the way you tell your story online can make all the difference.
            </p>
          </Col>
          <Col>
            <Row className="services-row">
              <Col>
                <h3 className="title">Packing or Unpacking</h3>
                <p>
                  Packing and unpacking can be the most difficult and stressful
                  part of moving. With our help, we can make the process go
                  faster with ease.
                </p>
                <Button className="navbar-button">Contact for Pricing</Button>
              </Col>
            </Row>
            <Row className="services-row">
              <Col>
                <h3 className="title">Organizing or Decluttering</h3>
                <p>
                  When getting ready to sell or stage your home, cleaning is a
                  necessity. To make the chore less hectic, we can offer
                  services to help you out.
                </p>
                <Button className="navbar-button">Contact for Pricing</Button>
              </Col>
            </Row>
            <Row className="services-row">
              <Col>
                <h3 className="title">Home Listing Appointment</h3>
                <p>
                  Putting your house up for sale can be a very exciting event.
                  To help navigate the ins and outs of selling a home, we can
                  schedule an appointment with you.
                </p>
                <Button className="navbar-button">Contact for Pricing</Button>
              </Col>
            </Row>
            <Row className="services-row">
              <Col>
                <h3 className="title">Home Buyer Appointment</h3>
                <p>
                  The process of buying a house can be exhilerating, but also
                  tough. We can schedule you an appointment and help you
                  determine what you want, need, and can have in your new home.
                </p>
                <Button className="navbar-button">Contact for Pricing</Button>
              </Col>
            </Row>
            <Row className="services-row">
              <Col>
                <h3 className="title">Staging a Listing Appointment</h3>
                <p>
                  In order to sell your home quicker, the easiest option is to
                  make it look aesthetically-pleasing. We can give you guidence
                  on how to decorate and stage your home professionally.
                </p>
                <Button className="navbar-button">Contact for Pricing</Button>
              </Col>
            </Row>
            <Row className="services-row">
              <Col>
                <h3 className="title">Design Consultation</h3>
                <p></p>
                <Button className="navbar-button">Contact for Pricing</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Services;
