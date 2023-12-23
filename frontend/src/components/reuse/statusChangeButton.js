import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';


function RenderStatusButton(status, toUpdate, curr) {
  /**
   * Reusable component for Header Nav Bar
   */

  const handleChange = (_id, toChange, value) => {

    fetch("/api/users/update/booleans", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({_id: _id, toChange: toChange, status: value }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          setTimeout(window.location.reload(), 10000);
        } else {
          alert("Account already exists!");
        }
      });
  }    


  return (
    <>
        <Dropdown>
        <Dropdown.Toggle variant={status ? "success" : "danger"} id="dropdown-basic">
          {status ? "Yes" : "No"}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
        {status ? <Dropdown.Item onClick={() => handleChange(curr, toUpdate, false)}>No</Dropdown.Item>
          :
          <Dropdown.Item  onClick={() => handleChange(curr, toUpdate, true)}>Yes</Dropdown.Item>          
          }
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default RenderStatusButton;
