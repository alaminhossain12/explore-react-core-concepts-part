/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./User.css";

const User = ({ user }) => {
  //   console.log(user);
  const { name, email, username, address } = user;
  return (
    <div className="user">
      <h2>Name: {name}</h2>
      <h4>Username: {username}</h4>
      <p>Email: {email}</p>
      <p>
        <small>City: {address.city}</small>
      </p>
      <p>
        <small>Street: {address.street}</small>
      </p>
    </div>
  );
};

export default User;
