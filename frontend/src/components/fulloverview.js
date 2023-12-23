import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Header from "./reuse/header";
import "../App.css";
import RenderStatusButton from "./reuse/statusChangeButton"; // For changing the status of employee 
import Footer from "./reuse/footer";
import Spinner from 'react-bootstrap/Spinner';

function QuickUpdate() {
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
        if (curr.hired){

            return (
                <tr>
                  <td style={{ minWidth: "150px" }}>
                    
                  <a href={"/users/edit/employee/" + curr._id}>{curr.fname}</a> {curr.lname}

                    
                    </td>
                  <td style={{ minWidth: "150px" }}>{RenderStatusButton(curr.hired, "hired", curr._id)}</td>
                  <td style={{ minWidth: "150px" }}>{RenderStatusButton(curr.training, "training", curr._id)}</td>
                  <td style={{ minWidth: "150px" }}>{RenderStatusButton(curr.schedule, "schedule", curr._id)}</td>
                  <td style={{ minWidth: "150px" }}>{RenderStatusButton(curr.whenIWork, "whenIWork", curr._id)}</td>
                  <td style={{ minWidth: "150px" }}>{RenderStatusButton(curr.newTek, "newTek", curr._id)}</td>
                  <td style={{ minWidth: "150px" }}>{RenderStatusButton(curr.backgroundCheck, "backgroundCheck", curr._id)}</td>
                  <td style={{ minWidth: "150px" }}>{RenderStatusButton(curr.travelWillingness, "travelWillingness", curr._id)}</td>
                  
                </tr>
              );

        }

    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    {Header(2)}
    <Container fluid className="mb-3">
      <h1>Quick Updates</h1>
    </Container>

    <Container fluid>
      {employeeData ? (
        <Table responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Hired</th>
              <th>Training</th>
              <th>Schedule</th>
              <th>WhenIWork</th>
              <th>NewTek</th>
              <th>Background</th>
              <th>Travel</th>
            </tr>
          </thead>
          <tbody>{renderEmployees(employeeData.data)}</tbody>
        </Table>
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

export default QuickUpdate;
