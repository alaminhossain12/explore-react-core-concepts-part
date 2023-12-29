/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Photos.css";
import Photo from "../Photo/Photo";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div>
      <h2>Photos: {photos.length}</h2>
      <div className="photos">
        {photos.map((photo) => (
          <Photo photo={photo} key={photo.id}></Photo>
        ))}
      </div>
    </div>
  );
};

export default Photos;
