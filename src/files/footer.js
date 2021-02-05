import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "../App.css";

function Footer() {
  return (
    <>
      <Row className="footer">
        <Col lg={3}>
          <h3 className="footer-title">Venegas Maxwell Homes</h3>
          <p className="footer-text">(214) 734-7889</p>
          <p className="footer-text">julie@venegasmaxwellhomes.com</p>
        </Col>
        <Col lg={2}></Col>
        <Col lg={2}>
          <h3 className="footer-title">What We Offer</h3>
          <p className="footer-text">Services</p>
          <p className="footer-text">About</p>
          <p className="footer-text">Listings</p>
        </Col>
        <Col lg={4} className="footer-required">
          <a
            className="footer-text"
            href="https://drive.google.com/file/d/1tMAPn7Il15kPWOTRHZtBuxIu34AAXDLc/view"
          >
            Information About Brokerage Services
          </a>
          <Image
            className="footer-fathom"
            fluid
            src="https://mail.google.com/mail/u/0?ui=2&ik=1484ff25f1&attid=0.1.2&permmsgid=msg-f:1689730373219474720&th=177320d265ef5d20&view=fimg&sz=s0-l75-ft&attbid=ANGjdJ9VuwNUud5OWHPEZF3-J0DNj_I_Xv8W_ceZwhqu28Yc7Lnzj4v6xRjBLewtlXdd4YPIXk18EiEpFXwgjlURng9PP8Lrr9zpH24WxeNu7E3jj1t168b6m7C2E14&disp=emb"
          ></Image>
        </Col>
      </Row>
    </>
  );
}

export default Footer;
