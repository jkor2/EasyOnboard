// Where we can update 
// email, phonenumber, location, notes, Pay, prefered locations  


import React from "react";
import Container from "react-bootstrap/Container";
import Header from "./reuse/header";
import "../App.css";
import RenderStatusButton from "./reuse/statusChangeButton"; // For changing the status of employee 
import Footer from "./reuse/footer";
import Spinner from 'react-bootstrap/Spinner';

function ProfilePage() {
  // Employee Data State
  const [employeeData, setEmployeeData] = React.useState(null);

  
  React.useEffect(() => {
    /**
     * User Auth after login
     * For dev env no auth
     */

    const currentUrl = window.location.href;
    const urlParts = currentUrl.split('/');
    const employeeID = urlParts[urlParts.length - 1]

    fetch("/api/users/findone", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({_id: employeeID}),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 200) {
            console.log(res)
        } else {
            alert("Account already exists!");
          }
        });

  }, []);

console.log(employeeData)

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    {Header(1)}

    <div style={{ marginTop: "auto" }}>
      <Footer />
    </div>
  </div>
);
}

export default ProfilePage;
