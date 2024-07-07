import "./App.scss";
import HomeNav from "./components/HomeNav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfilePic from "./components/Profile";
import HomeSummary from "./components/HomeSummary";

function App() {
  return (
    <>
      <Card bg="light" data-bs-theme="light" className="card-home">
        <Card.Header>
          <HomeNav />
        </Card.Header>
        <Card.Body className="card-body">
          <Container>
            <Row>
              <Col>
                <ProfilePic />
              </Col>
              <Col>
                <HomeSummary />
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
