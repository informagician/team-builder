import React, { useState, useEffect } from 'react';

const Form = props => {
  let [member, setMember] = useState({
    fullname: "",
    role: "",
    email: "" 
  });

  // useEffect(() => {
  //   setMember({
  //     fullname: props.members.fullname, 
  //     role: props.members.role, 
  //     email: props.members.email
  //   })
  // }, props.memberToEdit)

  const handleChanges = e => {
    setMember({
      ...member,
      [e.target.name]: e.target.value
    });
  }

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ fullname: "", role:"", email:""});
  }


  return (
    <form onSubmit={submitForm}>
      <label>Fullname:
          <input 
            type="text" 
            name="fullname" 
            id="fullname" 
            placeholder="Enter Fullname"
            value={member.fullname}
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