import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Header from "./reuse/header";
import "../App.css";
import RenderStatusButton from "./reuse/statusChangeButton"; // For changing the status of employee 
import Footer from "./reuse/footer";

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
          <td style={{ minWidth: "150px" }}>{RenderStatusButton(curr.training, "training")}</td>
          <td style={{ minWidth: "150px" }}>{RenderStatusButton(curr.schedule, "schedule")}</td>
        </tr>
      );
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    {Header(1)}
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

    <div style={{ marginTop: "auto" }}>
      <Footer />
    </div>
  </div>
);
}

export default Home;
