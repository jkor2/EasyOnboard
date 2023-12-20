import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";


function Header(location) {
  /**
   * Reusable component for Header Nav Bar
   */

  return (
    <>
      <Navbar
        key={"sm"}
        expand={"sm"}
        className="text-light bg-custom-css mb-3"
      >
        <Container fluid className="text-light">
          <Navbar.Brand href="#" className="text-light">
            EzOnboard
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls={`offcanvasNavbarDropdown-expand-sm`}
            className="text-light"
          />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarDropdown-expand-sm`}
            placement="end"
          >
            <Offcanvas.Header closeButton className="text-light bg-custom-css">
              <Offcanvas.Title
                id={`offcanvasNavbarDropdown-expand-sm text-light`}
              >
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body className="text-light bg-custom-css">
              <Nav className="justify-content-end flex-grow-1 pe-3 text-light gap-3">
                <Nav.Link href="/" className={location == 1 ? "text-dark border-bottom border-dark rounded pd-2" : "text-light"}>
                  Overview
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light">
                  Full Breakdown
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light">
                  Contacts
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light">
                  By State
                </Nav.Link>
                <Nav.Link href="/upload" className={location == 5 ? "text-dark border-bottom border-dark rounded pd-2" : "text-light"}>
                  Upload
                </Nav.Link>
                <Nav.Link href="#action2" className="text-light">
                  Contract Generator
                </Nav.Link>
              </Nav>
              <Form className="d-flex text-light">
                <Form.Control
                  type="search"
                  placeholder="Employee Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-light">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
