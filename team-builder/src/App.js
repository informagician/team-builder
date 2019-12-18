import React, { useState } from 'react';
import './App.css';
import Add from './components/Add';

function App() {
  let [ member, setMember ] = useState({
    fname: "",
    lname: "",
    location: "",
    email: ""    
  });
  return (
    <div className="App">
      <Add />
    </div>
  );
}

export default App;
