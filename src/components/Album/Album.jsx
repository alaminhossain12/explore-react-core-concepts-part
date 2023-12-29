/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Album.css";

const Album = ({ album }) => {
  //   console.log(album);
  const { userId, title } = album;
  return (
    <div className="album">
      <h4>UserId: {userId}</h4>
      <p>Title: {title}</p>
    </div>
  );
};

export default Album;
