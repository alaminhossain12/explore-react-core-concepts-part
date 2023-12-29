/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Comments.css";
import Comment from "../Comment/Comment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div>
      <h3>Comments: {comments.length}</h3>
      <div className="comments">
        {comments.map((comment) => (
          <Comment comment={comment} key={comment.id}></Comment>
        ))}
      </div>
    </div>
  );
};

export default Comments;
