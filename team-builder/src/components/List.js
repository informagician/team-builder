import React from 'react';

const List = props => {
    
    return (
        <div className="list">
        {
            props.members.map(member => (
                <div className="card">
                    <h3>{member.fname} {member.lname}</h3>
                    <p>Role: {member.role}</p>
                    <p>Email Address: {member.email}</p>
                </div>
            ))
        }
        </div>
    );
}

export default List;