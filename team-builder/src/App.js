import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import List from './components/List';

function App() {
  let [ member, setMember ] = useState({
    fname: "",
    lname: "",
    location: "",
    email: ""    
  });

  return (
    <div className="App">
      <Form />
      <List />
    </div>
  );
}

export default App;
