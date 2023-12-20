import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';


function RenderStatusButton(status, toUpdate) {
  /**
   * Reusable component for Header Nav Bar
   */

  return (
    <>
        <Dropdown>
        <Dropdown.Toggle variant={status ? "success" : "danger"} id="dropdown-basic">
          {status ? "Complete" : "Incomplete"}
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
        {status ? <Dropdown.Item onClick={() => console.log(toUpdate, "False")}>Incomplete</Dropdown.Item>
          :
          <Dropdown.Item  onClick={() => console.log(toUpdate, "True")}>Complete</Dropdown.Item>          
          }
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default RenderStatusButton;
