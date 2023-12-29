/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import "./Albums.css";
import Album from "../Album/Album";

const Albums = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);
  return (
    <div>
      <h2>Albums: {albums.length}</h2>
      <div className="albums">
        {albums.map((album) => (
          <Album album={album} key={album.id}></Album>
        ))}
      </div>
    </div>
  );
};

export default Albums;
