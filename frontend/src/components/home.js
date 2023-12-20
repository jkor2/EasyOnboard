import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import Header from "./reuse/header";
import "../App.css";

function Home() {
  // Employee Data State
  const [employeeData, setEmployeeData] = React.useState(null);





  React.useEffect(() => {
    /**
     * User Auth after login
     * For dev env no auth
     */

    fetch("/api/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setEmployeeData(data));
  }, []);

  const renderEmployees = (data) => {
    return data.map((curr) => {
      return (
        <tr>
          <td style={{ minWidth: "150px" }}>{curr.fname}</td>
          <td style={{ minWidth: "150px" }}>{curr.lname}</td>
          <td style={{ minWidth: "150px" }}>{curr.location}</td>
          <td style={{ minWidth: "150px" }}>{curr.email}</td>
          <td style={{ minWidth: "150px" }}>{curr.phone_number}</td>
          <td style={{ minWidth: "150px" }}>{curr.position}</td>
          <td style={{ minWidth: "150px" }}>{renderButton(curr.training)}</td>
          <td style={{ minWidth: "150px" }}>{renderButton(curr.schedule)}</td>
        </tr>
      );
    });
  };

  const renderButton = (status) => {
    return (
        <Dropdown>
        <Dropdown.Toggle variant={status ? "success" : "danger"} id="dropdown-basic">
          {status ? "Complete" : "Not-Complete"}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
        {status ? <Dropdown.Item href="#/action-1">False</Dropdown.Item>
          :
          <Dropdown.Item href="#/action-2">True</Dropdown.Item>          
          }
        </Dropdown.Menu>
      </Dropdown>
    )
  } 


  return (
    <>
      <Header />
      <Container fluid className="mb-3">
        <h1>Employee Overview</h1>
      </Container>

      <Container fluid>
        {employeeData ? (
          <Table responsive>
            <thead>
              <tr>
                <th>First</th>
                <th>Last</th>
                <th>Location</th>
                <th>Email</th>
                <th>Cell</th>
                <th>Postion</th>
                <th>Training</th>
                <th>Schedule</th>
              </tr>
            </thead>
            <tbody>{renderEmployees(employeeData.data)}</tbody>
          </Table>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}

export default Home;
