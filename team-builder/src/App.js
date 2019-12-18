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

  return (
    <div className="App">
      <Form />
      <List members={members}/>
    </div>
  );
}

export default App;
