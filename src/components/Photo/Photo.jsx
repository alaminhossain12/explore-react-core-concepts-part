/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Photo.css";

const Photo = ({ photo }) => {
  //   console.log(photo);
  const { albumId, title, url, thumbnailUrl } = photo;
  return (
    <div className="photo">
      <h4>AlbumId: {albumId}</h4>
      <p>
        <small>Title: {title}</small>
      </p>
      <a href="">Link: {url}</a>
      <br />
      <br />
      <a href="">Url: {thumbnailUrl}</a>
    </div>
  );
};

export default Photo;
