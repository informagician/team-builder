import React from 'react';
import team from '../data';

const List = props => {
    
    return (
        <div className="list">
        {
            team.map(item => {
                let fname = item.fname;
                let lname = item.lname;
                let role = item.role;
                let email = item.email;
                return(
                <div className="card">
                    <h3>{fname} {lname}</h3>
                    <p>Role: {role}</p>
                    <p>Email Address: {email}</p>
                </div>
                )
            })
        }
        </div>
    );
}

export default List;