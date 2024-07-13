import "./HomeSummary.scss"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaHouseChimney } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";

function HomeSummary() {
  return (
    <Container>
      <Row>
        <h1>Hello,</h1>
        <h5>A Bit About Me</h5>
        <p>
          As a team player with a light-hearted spirit, I bring an outgoing and
          caring approach to my real estate business. Passionate about my work,
          I will listen attentively to my clients` needs, ensuring they feel
          understood and comfortable. My relatable nature and friendly demeanor
          make me more than just a real estate agent but a trusted partner in
          your real estate journey. I`m excited to provide a pleasant, friendly,
          personalized real estate experience.
        </p>
      </Row>
      <Row>
        <Col xs={4} md={4}>
          <div className="red-circle">
            <a
              className="nav-text"
              href="https://www.example.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume <GrDocumentText />
            </a>
          </div>
        </Col>
        <Col xs={4} md={4}>
          <div className="blue-circle">
            <a
              className="nav-text"
              href="https://www.example.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open Houses <FaHouseChimney />
            </a>
          </div>
        </Col>
        <Col xs={4} md={4}>
          <div className="white-circle">
            <a
              className="nav-text"
              href="https://www.example.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
              <IoMdContact />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeSummary;
