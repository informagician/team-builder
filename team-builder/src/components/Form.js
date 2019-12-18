import React, { useState } from 'react';
import team from '../data';

const Form = props => {
  let [member, setMember] = useState({
    fname: "",
    lname: "",
    role: "",
    email: "" 
  });

  const handleChanges = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  }

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ fname: "", lname: "", role:"", email:""});
  }


  return (
    <form onSubmit={submitForm}>
      <label>Firstname:
          <input 
            type="text" 
            name="fname" 
            id="fname" 
            placeholder="Enter Firstname"
            value={member.fname}
            onChange={handleChanges}
          />
      </label><br />
      <label>Lastname:
          <input 
            type="text" 
            name="lname" 
            id="lname"
            placeholder="Enter Lastname"
            value={member.lname}
            onChange={handleChanges}
          />
      </label><br />
      <label>Role:
          <input 
            type="text" 
            name="role" 
            id="role"
            placeholder="Enter Role"
            value={member.role}
            onChange={handleChanges}
          />
      </label><br />
      <label>Email Address:
          <input 
            type="text" 
            name="email" 
            id="email"
            placeholder="Enter Email Address"
            value={member.email}
            onChange={handleChanges}
          />
      </label><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;