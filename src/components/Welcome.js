import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Welcome = () => {
  const { user, setUser } = useContext(UserContext);
  // console.log(user);

  return (
    <div className="welcome">
      <h1>Enter your name</h1>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        name="username"
        autoComplete="off"
      />
      <button className="welcome-button">
        <Link className="welcome-button-link " to="/Home">
          Submit
        </Link>
      </button>
    </div>
  );
};
