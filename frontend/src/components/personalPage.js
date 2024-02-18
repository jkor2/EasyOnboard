// Where we can update
// email, phonenumber, location, notes, Pay, prefered locations

import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./reuse/header";
import "../App.css";
import RenderStatusButton from "./reuse/statusChangeButton"; // For button status of employee
import Footer from "./reuse/footer";
import Spinner from "react-bootstrap/Spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function ProfilePage() {
  // Employee Data State
  const [employeeData, setEmployeeData] = React.useState(null);
  const [formData, setFormData] = React.useState({
    fname: "",
    lname: "",
    email: "",
    phone_number: "",
    notes:"",
    credit_hours: ""
  });
  console.log(formData);

  React.useEffect(() => {
    /**
     * User Auth after login
     * For dev env no auth
     */

    const currentUrl = window.location.href;
    const urlParts = currentUrl.split("/");
    const employeeID = urlParts[urlParts.length - 1];

    fetch("/api/users/findone", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: employeeID }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          setEmployeeData(res.data);
        } else {
          alert("Server Error");
        }
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handelSubmit = () => {
    /*
    POST method to API
      - Handles Name, email, cell, credit hours, and notes 
    Render Updates
    API Route: /users/individual/update
    */
  }


  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {Header(0)}

      <Container>
        {employeeData ? (
          <span>
            {" "}
            <Row>
              <Row sm={8}>
                <h1>
                  {employeeData.fname} {employeeData.lname}
                </h1>
              </Row>
              <Row sm={4}>
                <h2>
                  {employeeData.hired ? "Current Employee" : "Not Employee"}
                </h2>
              </Row>
            </Row>
            <Row className=" mt-5">
              <Row>
                <h4>Profile Info</h4>
              </Row>
            </Row>
            <Row className="mt-3 ">
              <Row>
                <Col sm>
                  <h5>First</h5>

                  <InputGroup className="mb-3">
                    <Form.Control
                      name="fname"
                      placeholder={employeeData.fname}
                      defaultValue={employeeData.fname}
                      onChange={handleInputChange}
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="bg-light"
                    />
                    <Button variant="outline-success" id="button-addon2">
                      Submit
                    </Button>
                  </InputGroup>
                </Col>

                <Col sm>
                  <h5>Last</h5>

                  <InputGroup className="mb-3">
                    <Form.Control
                        name="lname"
                      placeholder={employeeData.lname}
                      defaultValue={employeeData.lname}
                      onChange={handleInputChange}
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="bg-light"
                    />
                    <Button variant="outline-success" id="button-addon2">
                      Submit
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                <Col sm>
                  <h5>Cell</h5>
                  <InputGroup className="mb-3">
                    <Form.Control
                    name="phone_number"
                      placeholder={employeeData.phone_number}
                      defaultValue={employeeData.phone_number}
                      onChange={handleInputChange}
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="bg-light"
                    />
                    <Button variant="outline-success" id="button-addon2">
                      Submit
                    </Button>
                  </InputGroup>
                </Col>
                <Col sm>
                  {" "}
                  <h5>Email</h5>
                  <InputGroup className="mb-3">
                    <Form.Control
                    name="email"
                      placeholder={employeeData.email}
                      defaultValue={employeeData.email}
                      onChange={handleInputChange}
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="bg-light"
                    />
                    <Button variant="outline-success" id="button-addon2">
                      Submit
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
              <Row>
                {" "}
                <Col sm>
                  <h5>Credit Hours</h5>
                  <InputGroup className="mb-3">
                    <Form.Control
                    name="credit_hours"
                      placeholder={0}
                      defaultValue={0}
                      onChange={handleInputChange}
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      className="bg-light"
                    />
                    <Button variant="outline-success" id="button-addon2">
                      Submit
                    </Button>
                  </InputGroup>
                </Col>
                <Col sm>
                  {" "}
                  <h5>Travel</h5>{" "}
                  {RenderStatusButton(
                    employeeData.travelWillingness,
                    "travelWillingness",
                    employeeData._id
                  )}{" "}
                </Col>
              </Row>
            </Row>
            {/**
             * 
             * Need to add the employee state location
             * 
             */}
            <Row className="d-flex mt-5 pt-4 bg-light">
              <Col sm>
                <h4>Applicant Pipeline</h4>
              </Col>
            </Row>
            <Row className="pb-4 pt-3 bg-light">
              <Col sm>
                <h5>First Interview</h5>{" "}
                {RenderStatusButton(
                  employeeData.interviewFirst,
                  "interviewFirst",
                  employeeData._id
                )}
              </Col>
              <Col sm>
                <h5>Second Interview</h5>{" "}
                {RenderStatusButton(
                  employeeData.interviewSecond,
                  "interviewSecond",
                  employeeData._id
                )}
              </Col>
              <Col sm>
                {" "}
                <h5>Hire Status</h5>{" "}
                {RenderStatusButton(
                  employeeData.hired,
                  "hired",
                  employeeData._id
                )}{" "}
              </Col>
            </Row>
            <Row className="d-flex mt-5">
              <Col sm>
                <h4>On Board Status</h4>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm>
                <h5>NewTek</h5>{" "}
                {RenderStatusButton(
                  employeeData.newTek,
                  "newTek",
                  employeeData._id
                )}
              </Col>
              <Col sm>
                <h5>WhenIWork</h5>{" "}
                {RenderStatusButton(
                  employeeData.whenIWork,
                  "whenIWork",
                  employeeData._id
                )}
              </Col>
              <Col sm>
                {" "}
                <h5>Scheduled</h5>{" "}
                {RenderStatusButton(
                  employeeData.schedule,
                  "schedule",
                  employeeData._id
                )}{" "}
              </Col>
              <Col sm>
                {" "}
                <h5>Training</h5>{" "}
                {RenderStatusButton(
                  employeeData.training,
                  "training",
                  employeeData._id
                )}{" "}
              </Col>
              <Col sm>
                {" "}
                <h5>Background Check</h5>{" "}
                {RenderStatusButton(
                  employeeData.backgroundCheck,
                  "backgroundCheck",
                  employeeData._id
                )}{" "}
              </Col>
            </Row>
            <Row className="mt-5 mb-3 ">
              {" "}
              <Col sm>
                <h5>Notes</h5>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Control as="textarea" rows={3} 
                  name="notes"
                   placeholder={employeeData.notes}
                   defaultValue={employeeData.notes}
                   onChange={handleInputChange}
                   aria-label="Recipient's username"
                   aria-describedby="basic-addon2"
                   className="bg-light"
                  
                  />
                </Form.Group>
                <Button variant="outline-success" id="button-addon2">
                  Submit
                </Button>
              </Col>
            </Row>
          </span>
        ) : (
          <Spinner animation="border" variant="info" />
        )}
      </Container>
      <div style={{ marginTop: "auto" }}>
        <Footer />
      </div>
    </div>
  );
}

export default ProfilePage;
