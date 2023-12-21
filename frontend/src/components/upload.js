import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Header from "./reuse/header";
import "../App.css";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";


function Upload() {
    /**
     * Upload component
     * Can upload individual employees and based on a CSV
     */

    const navigate = useNavigate();


    const [switchValueWiW, setSwitchValueWiW] = React.useState(false);

    const handleSwitchChangeNT = (event) => {
      setSwitchValueNT(event.target.checked);
      setNewEmployee((prev) => ({
        ...prev,
        "newTek": event.target.checked
      }))
      
    };
    const [switchValueNT, setSwitchValueNT] = React.useState(false);

    const handleSwitchChangeWiW = (event) => {
      setSwitchValueWiW(event.target.checked);
      setNewEmployee((prev) => ({
        ...prev,
        "whenIWork": event.target.checked
      }))
      
    };
    const [switchValueTrain, setSwitchValueTrain] = React.useState(false);

    const handleSwitchChangeTrain = (event) => {
      setSwitchValueTrain(event.target.checked);
      setNewEmployee((prev) => ({
        ...prev,
        "training": event.target.checked
      }))
      
    };
    const [switchValueSchedule, setSwitchValueSchedule] = React.useState(false);

    const handleSwitchChangeSchedule = (event) => {
      console.log(switchValueSchedule)
      setNewEmployee((prev) => ({
        ...prev,
        "schedule": event.target.checked
      }))

    };

    const [newEmployee, setNewEmployee] = React.useState({
      fname: "",
      lname: "",
      location: "",
      position: "",
      email: "",
      phone_number: "",
      whenIWork: false,
      newTek: false,
      training: false,
      schedule: false

    })

    const [resStatus, setResStatus] = React.useState(null)

    const handleChange = (event) => {
      const {name, value} = event.target
      
      setNewEmployee((prev) => ({
        ...prev,
        [name]: value
      }))
    }

    const handleIndividualUpload = (event) => {
      event.preventDefault()
      fetch("/api/users/individual", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newEmployee),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            alert(res.response);
          } else {
            alert("Account already exists!");
          }
        });
    } 


    console.log(newEmployee)

    return (
      <>
        {Header(5)}
        <Container className="mb-5"><h1>Employee Upload</h1></Container>
        <span className="text-danger">*</span> <span>Required Fields</span>

        <Container >
        <Form className="mt-3" method="POST" onSubmit={handleIndividualUpload}>
        <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          First Name <span className="text-danger">*</span>
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name="fname" placeholder="First Name" onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Last Name <span className="text-danger">*</span>
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name="lname" placeholder="Last Name" onChange={handleChange} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Location <span className="text-danger">*</span>
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name="location" placeholder="City, State" onChange={handleChange} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
            Position <span className="text-danger">*</span>
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name="position" placeholder="Position" onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email <span className="text-danger">*</span>
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" name="email" placeholder="Email" onChange={handleChange} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3 form-control-sm" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Cellphone <span className="text-danger">*</span>
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" name="phone_number" placeholder="Phone Number" onChange={handleChange}/>
        </Col>
        <Form>
      <Container className="d-flex w-75 justify-content-between mt-3 mb-3">
      <Form.Group controlId="formSwitch">
      <Form.Label column sm={12}>
          WhenIWork 
        </Form.Label>
        <Form.Check
          type="switch"
          id="custom-switch"
          checked={switchValueWiW}
          onChange={handleSwitchChangeWiW}
        />
      </Form.Group>
      <Form.Group controlId="formSwitch">
      <Form.Label column sm={12}>
          NewTek
        </Form.Label>
        <Form.Check
          type="switch"
          id="custom-switch"
          checked={switchValueNT}
          onChange={handleSwitchChangeNT}
        />
      </Form.Group>
      <Form.Group controlId="formSwitch">
      <Form.Label column sm={12}>
          Training 
        </Form.Label>
        <Form.Check
          type="switch"
          id="custom-switch"
          checked={switchValueTrain}
          onChange={handleSwitchChangeTrain}
        />
      </Form.Group>
      
      <Form.Group controlId="formSwitch">
      <Form.Label column sm={12}>
          Scheduled 
        </Form.Label>
        <Form.Check
          type="switch"
          id="custom-switch"
          checked={switchValueSchedule}
          onChange={handleSwitchChangeSchedule}
        />
      </Form.Group>

      </Container>

    </Form>

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