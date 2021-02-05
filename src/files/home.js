import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function Home() {
  return (
    <>
      <Row>
        <Col lg="2"></Col>
        <Col lg="7">
          <Image className="nav-logo" src="/logo.png"></Image>
        </Col>
        <Col lg="3"></Col>
      </Row>
      <Row>
        <Col sm={12}>
          <p className="home-mission">Our Mission</p>
          <h1 className="home-mission-statement">
            Venegas Maxwell Homes combines Real Estate with complimentary
            staging and design consultation, ensuring you receive the highest
            service in the industry.
          </h1>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col lg={1}></Col>
          <Col>
            <Image
              data-aos="fade-right"
              data-aos-easing="ease-in"
              data-aos-duration="800"
              fluid
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            ></Image>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <Row className="home-row">
          <Col lg={1}></Col>
          <Col>
            <h1 className="home-text">Listings</h1>
            <p>
              Looking for a new home? Come take a look at our active listings!
            </p>
          </Col>
          <Col lg={2}></Col>
          <Col lg={3}>
            <Button href="/listings" className="navbar-button">
              Listings
            </Button>
          </Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col>
            <Image
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="800"
              fluid
              src="https://images.unsplash.com/photo-1542089363-bba089ffaa25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            ></Image>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <Row className="home-row">
          <Col lg={1}></Col>
          <Col>
            <h1 className="home-text">Services</h1>
            <p>
              Need help packing or unpacking? Need advice on buying or selling a
              home? Let us help you!
            </p>
          </Col>
          <Col lg={2}></Col>
          <Col lg={3}>
            <Button href="/services" className="navbar-button">
              Services
            </Button>
          </Col>
        </Row>
        <Row>
          <Col lg={1}></Col>
          <Col>
            <Image
              data-aos="fade-left"
              data-aos-easing="ease-in"
              data-aos-duration="800"
              fluid
              src="/together.jpg"
            ></Image>
          </Col>
          <Col lg={1}></Col>
        </Row>
        <Row className="home-row">
          <Col lg={1}></Col>
          <Col>
            <h1 className="home-text">About</h1>
            <p>Would you like to work with us? Take a look at who we are!</p>
          </Col>
          <Col lg={2}></Col>
          <Col lg={3}>
            <Button href="/services" className="navbar-button">
              Who We Are
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
