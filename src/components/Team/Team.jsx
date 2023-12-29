/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Team = () => {
  const [team, setTeam] = useState(11);
  const handlePlayer = () => {
    const newTeam = team + 1;
    setTeam(newTeam);
  };
  const handleRemovePlayer = () => {
    const newTeam = team - 1;
    setTeam(newTeam);
  };
  return (
    <div>
      <h2>Players: {team}</h2>
      <button onClick={handlePlayer}>Players Add</button>
      <button onClick={handleRemovePlayer}>Remove Player</button>
    </div>
  );
};

export default Team;
