import React from "react";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <>
      <Navbar
        key={"sm"}
        expand={"sm"}
        className="text-light bg-custom-css mt-5"
      >
        <Container fluid className="text-light">
          <Navbar.Brand href="#" className="text-light">
            EzOnboard
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
