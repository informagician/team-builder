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
  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <List members={members}/>
    </div>
  );
}

export default App;
