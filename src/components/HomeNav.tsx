import { Container, Navbar, Nav, Row, Col } from "react-bootstrap";
import { FaHouseChimney } from "react-icons/fa6";
import { GrDocumentText } from "react-icons/gr";
import { GiHouseKeys } from "react-icons/gi";
import { IoMdContact } from "react-icons/io";
import "./HomeNav.scss";

function HomeNav() {
  return (
    <Navbar
      data-bs-theme="light"
      className="navbar-background top-0 navbar"
      expand="md"
    >
      <Container fluid>
        <Navbar.Brand href="#home" className="brand-container">
          <Container>
            <Row>
              <Col>
                <div className="circle"></div>
              </Col>
              <Col>
                <h3 className="title">Ally Maloney</h3>
              </Col>
              <Col>
                <p className="sub-title">
                  Real Estate Agent <FaHouseChimney />
                  <GiHouseKeys />
                </p>
              </Col>
            </Row>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav className="pe-3">
            <Nav.Link
              href="https://www.raypec.org/o/rphs/page/high-school-xc-team"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="sub-title">
                Resume <GrDocumentText />|
              </p>
            </Nav.Link>
            <Nav.Link
              href="https://www.raymore.com/government/city-departments/parks-recreation/parks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="sub-title">
                Open Houses <FaHouseChimney />|
              </p>
            </Nav.Link>
            <Nav.Link
              href="https://www.raymore.com/government/city-departments/parks-recreation/parks"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="sub-title">
                Contact
                <IoMdContact />
              </p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HomeNav;
