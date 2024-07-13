import "./App.scss";
import HomeNav from "./components/HomeNav";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProfilePic from "./components/Profile";
import HomeSummary from "./components/HomeSummary";
import { useEffect, useState } from "react";

function App() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <Card bg="light" data-bs-theme="light" className="card-home">
        <Card.Header>
          <HomeNav />
        </Card.Header>
        <Card.Body className="card-body">
          {windowDimensions.width > 777 ? (
            <Container>
              <Row>
                <Col xs={12} md={6}>
                  <ProfilePic />
                </Col>
                <Col xs={12} md={6}>
                  <HomeSummary />
                </Col>
              </Row>
            </Container>
          ) : (
            <>
              <Container>
                <Row>
                  <Col xs={4} md={4}></Col>
                  <Col xs={4} md={6}>
                    <ProfilePic />
                  </Col>
                  <Col xs={4} md={4}></Col>
                </Row>
                <Row>
                    <HomeSummary />
                </Row>
              </Container>
            </>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

export default App;
