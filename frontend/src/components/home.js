import React from "react"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Table from 'react-bootstrap/Table';
import Header from "./reuse/header";

import '../App.css';

function Home() {

// Employee Data State 
 const [employeeData, setEmployeeData] = React.useState(null)


 React.useEffect(() => {
    /**
     * User Auth after login 
     * For dev env no auth 
     */

    fetch("/api/users", {
      method: "GET"})
      .then((res) => res.json())
      .then((data) => setEmployeeData(data))


  }, [])


  const renderEmployees = (data) => {
    return (
    data.map(curr => {
        return(
            <tr>
            <td style={{ minWidth: '150px' }}>{curr.fname}</td>
            <td style={{ minWidth: '150px' }}>{curr.lname}</td>
            <td style={{ minWidth: '150px' }}>{curr.location}</td>
            <td style={{ minWidth: '150px' }}>{curr.email}</td>
            <td style={{ minWidth: '150px' }}>{curr.phone_number}</td>
            <td style={{ minWidth: '150px' }}>{curr.position}</td>
            <td style={{ minWidth: '150px' }}>{curr.training}</td>
            <td style={{ minWidth: '150px' }}>{curr.schedule}</td>
          </tr>
        )
    }))
  }


  return (
   <>
   <Header/>
<Container fluid>
{employeeData ? 
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
      <tbody>
        {renderEmployees(employeeData.data) }
      </tbody>
    </Table> : ""}
    </Container>
  </>
  );
}

export default Home;
