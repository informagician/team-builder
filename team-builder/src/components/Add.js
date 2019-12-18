import React from 'react';

const Add = props => {

    return (
        <form>
        <label>Firstname: 
          <input type="text" name="fname" id="fname"></input>
        </label><br/>
        <label>Lastname: 
          <input type="text" name="lname" id="lname"></input>
        </label><br/>
        <label>Location: 
          <input type="text" name="location" id="location"></input>
        </label><br/>
        <label>Email Address: 
          <input type="text" name="email" id="email"></input>
        </label><br/>
        <button>Submit</button>
      </form>
    );
}

export default Add;