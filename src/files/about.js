import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "../App.css";

function About() {
  return (
    <>
      <Container>
        <Row className="about-row">
          <Col>
            <h1 className="title">Who We Are</h1>
          </Col>
          <Col>
            <p>
              Venegas Maxwell Homes combines Real Estate with complimentary
              staging and design consultation, ensuring you receive the highest
              service in the industry. <br /> <br /> What’s the best part about
              using us as a real estate team to help you buy and sell your home?
              We will be here with you every step of the way to guide you
              through the home selling process. Our brokerage has a wide network
              of reach in the local community as well as on a broader platform
              through our social media. <br /> <br /> We will personally oversee
              all marketing, set up showings, review offers, handle
              negotiations, review contracts to ensure you are protected,
              guarantee you get the best deal possible, work with the buyer
              agent to schedule inspections, work with the buyer's Lender and
              the Title company to smoothly get the deal done! <br /> <br /> We
              love getting to work with our clients and help them market and
              list their homes; We are not going to be happy until you are! Our
              goal is to get you the most money possible for your market and
              property condition. Let's chat today about your needs, wishes and
              wants for your next real estate endeavor!
            </p>
          </Col>
        </Row>
        <Row className="pictures-row">
          <Col lg={6}>
            <h1 className="title">Meet Sarah and Julie</h1>
            <Image fluid className="about-pictures" src="/maxwell.jpg"></Image>
            <p className="about-intro">
              <span className="emphasis">Sarah Maxwell</span> is a licensed real
              estate agent and professional stager and designer. Her
              attentiveness to her clients' desires, needs, tastes and budgets
              is how she creates spaces that turn a house into a beautiful home.
              Her ability to organize and de-clutter a house before a sale adds
              value and assists in a quick sale. She is passionate about helping
              her clients find a home that fits their lifestyle, budget and
              dreams and making it their perfect home. Sarah graduated from
              Texas Tech University and has worked in both education and the
              business world before jumping into real estate. She resides in
              Prosper, Texas with her husband Aaron and four children, Aiden,
              Grey, Miley and Rose.
            </p>
          </Col>
          <Col lg={6}>
            <Image fluid className="about-pictures" src="/venegas.jpg"></Image>
            <p className="about-intro">
              <span className="emphasis">Julie Venegas</span> provides a unique
              combination of extensive market knowledge, negotiation skills, and
              professional excellence that produce results for her clients. When
              you sell your home, Julie includes a professional photographer and
              her partner, Sarah Maxwell, is a professional designer and stager
              and provides free staging with all listings. These will maximize
              your home's potential. Her innovative online marketing will
              maximize your home’s exposure to buyers. Whether you are a first
              time homeowner or a seasoned homeowner, Julie loves helping buyers
              find their dream homes, and wants to work with each client
              individually, taking the time to understand their unique
              situations, needs and wishes. She understands that buying or
              selling a home is a major event in your life, and she feels
              privileged to help you every step of the way. Julie has been a CPA
              in public accounting since 2003. She graduated from Texas A&M
              University in College Station. With her years of experience in the
              business world, she brings a wealth of knowledge that will give
              you an extra edge with her professionalism, attention to detail,
              contract negotiation and preparation. She appreciates the
              importance of communication in a timely and efficient manner. This
              can be a highly stressful process for some, but with Julie, you
              can be assured that you are in good hands. Julie and her husband,
              Salvador, reside in Prosper, Texas with their three children,
              Kaitlyn, Jasmine and Carter.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
