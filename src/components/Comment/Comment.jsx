/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Comment.css";

const Comment = ({ comment }) => {
  //   console.log(comment);
  const { name, email, body, postId } = comment;
  return (
    <div className="comment">
      <h3>Name: {name}</h3>
      <p>Email: {email}</p>
      <p>
        <small>Body: {body}</small>
      </p>
      <p>
        <small>PostId: {postId}</small>
      </p>
    </div>
  );
};

export default Comment;
