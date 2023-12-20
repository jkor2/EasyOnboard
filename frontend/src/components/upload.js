import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "./reuse/header";
import "../App.css";
import Container from "react-bootstrap/esm/Container";

function Upload() {



    return (
      <>
        {Header(5)}
        <Container className="mb-5"><h1>Employee Upload</h1></Container>
        <Container >
        <Form className="mt-3">
        <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          First Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="First Name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Last Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Last Name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Location
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="City, State" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
            Position
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Position" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Phone Number
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Phone Number" />
        </Col>
      </Form.Group>
 

      <Form.Group as={Row} className="mb-3 form-control-sm">
        <Col>
          <Button type="submit" className="btn-lg width-50">Add Employee to DB</Button>
        </Col>
      </Form.Group>
    </Form>
    </Container>
    <Container className="mt-5"><h3>Group Upload</h3></Container>
        
    <div style={{ textAlign: "center" }}>
      <form>
        <div>***Under Constrcution***</div>
        <input type={"file"} accept={".csv"} className="mt-5"/>
      </form>
    </div>

      </>
    );
  }
  
  export default Upload;