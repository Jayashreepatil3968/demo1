import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import "./style.css"

// import Student from './Student';
// // import Trainer from './Trainer';
// // import Employee from './Employee';



function Home() {
   

  return (
    <div className='homeClass'>
    <h3>Employee Details</h3>
<form action=''>
    Name:<input type="text" name="name"  id="name"/><br/>
    Email:<input type="text" name="email"  id="email"/><br/>
    Phone No:<input type="text" name="phone" id="phone"/><br/>

    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic" >
        Sign in As
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="">Student</Dropdown.Item ><br/>
        <Dropdown.Item href="">trainer</Dropdown.Item><br/>
        <Dropdown.Item href="">Employee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </form>
    </div>
  );
}

export default Home;