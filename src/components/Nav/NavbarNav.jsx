import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logoImg from '../../assets/img/logo/campfitLogo.png'
import {Link} from "react-router-dom";

function NavbarNav() {
  return (
    <Navbar variant='dark' expand="lg" fixed='top' style={{backgroundColor: "#000"}} >
      <Container>
        <Navbar.Brand as={Link} to="/"><img src={logoImg} alt="campfit-logo" style={{width: "4rem"}}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/service">Service</Nav.Link>
            <Nav.Link as={Link} to="/gallery/page1">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/schedule/monday">Schedule</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNav;