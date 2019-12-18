import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  const [ members, setMembers ] = useState([
    {
      fname: "Milo",
      lname: "Rastgoo",
      role: "Fullstack Developer",
      email: "hi@informagician.com"    
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      fname: member.fname,
      lname: member.lname,
      role: member.role,
      email: member.email
    }
    setMembers([...members, newMember])
  }
  
  const memberToEdit = e => {
    e.preventDefault();
    setMembers({ fname: members.fname, lname: members.lname, role: members.role, email: members.email});
    //return console.log('pressed');
  }
  
  return (
    <div className="App">
      <Form addNewMember={addNewMember} memberToEdit={memberToEdit}/>
      <List members={members} />
    </div>
  );
}

export default App;
