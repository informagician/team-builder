import React from 'react';

const List = props => {
    
    return (
        <div className="list">
        {
            props.members.map(member => (
                <form className="card" onSubmit={props.memberToEdit}>
                    <h3 name="fullname" >{member.fullname}</h3>
                    <p name="role">Role: {member.role}</p>
                    <p name="email">Email Address: {member.email}</p>
                    <button type="submit">Edit</button>
                    <hr />
                </form>
            ))
        }
        </div>
    );
}

export default List;