/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Post.css";

const Post = ({ post }) => {
  //   console.log(post);
  const { title, body, userId } = post;
  return (
    <div className="post">
      <h3>Title: {title}</h3>
      <p>Body: {body}</p>
      <p>
        <small>UserId: {userId}</small>
      </p>
    </div>
  );
};

export default Post;
