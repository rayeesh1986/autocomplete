import React from "react";
const Listing = ({ users }) => {
  //console.log(users);
  const a = {
    height: "300px",
    overflow: "auto"
  };
  return (
    <ul className="list-group" style={a}>
      {users.map(user => (
        <li key={user.id} className="list-group-item">
          {user.login}
        </li>
      ))}
    </ul>
  );
};

export default Listing;
