import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import './Navbar.css';

export default function TechNavbar() {
  return (
    <Navbar expand="lg" className="tech-navbar" variant="dark" collapseOnSelect>
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="tech-brand">
          <span className="tech-logo">{"</>"}</span> wubalibadublog
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="offcanvasNavbar" 
          className="tech-toggler" 
        />
        
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          className="tech-offcanvas"
        >
          <Offcanvas.Header closeButton className="tech-offcanvas-header">
            <Offcanvas.Title id="offcanvasNavbarLabel" className="tech-brand">
              <span className="tech-logo">{"</>"}</span> Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="tech-offcanvas-body">
            <Nav className="justify-content-end flex-grow-1 pe-3 tech-nav">
              <Nav.Link as={Link} to="/" className="tech-link">
                <i className="bi bi-house-door tech-icon"></i> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/sobre" className="tech-link">
                <i className="bi bi-person-gear tech-icon"></i> Sobre
              </Nav.Link>
              <Nav.Link as={Link} to="/contato" className="tech-link">
                <i className="bi bi-envelope-at tech-icon"></i> Contato
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}