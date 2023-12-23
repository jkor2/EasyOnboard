// Where we can update
// email, phonenumber, location, notes, Pay, prefered locations

import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./reuse/header";
import "../App.css";
import RenderStatusButton from "./reuse/statusChangeButton"; // For changing the status of employee
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
          alert("Account already exists!");
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

  console.log(employeeData);

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
              <Col sm={8}>
                <h1>
                  {employeeData.fname} {employeeData.lname}
                </h1>
              </Col>
              <Col sm={4}>
                <h2>
                  {employeeData.hired ? "Current Employee" : "Not Employee"}
                </h2>
              </Col>
            </Row>
            
                        
            <Row className=" mt-5">
              <Col >
                <h4>Profile Info</h4>
              </Col>
            </Row>
            <Row className="mt-3 ">
              <Col>
                <h5>First Name</h5>

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
              <Col >
                <h5>Last Name</h5>

                <InputGroup className="mb-3">
                  <Form.Control
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
              <Col >
                {" "}
                <h5>Email</h5>
                <InputGroup className="mb-3">
                  <Form.Control
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
              <Col >
                {" "}
                <h5>Cell Phone</h5>
                <InputGroup className="mb-3">
                  <Form.Control
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
                <h5>Background Check</h5>{" "}
                {RenderStatusButton(
                  employeeData.backgroundCheck,
                  "backgroundCheck",
                  employeeData._id
                )}{" "}
              </Col>
            </Row>




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
