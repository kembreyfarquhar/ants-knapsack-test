import React from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <h1>LANDING PAGE</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <h2>LOGO</h2>
      <h3>Brief description of game</h3>
      <p>screenshot of game</p>
      <div style={{ height: 100, width: 100, backgroundColor: "brown" }} />
      <p>Here is a longer description of the game based on the screenshot</p>
      <div style={{ height: 100, width: 100, backgroundColor: "brown" }} />
      <p>Here is another description of the game based on the screenshot</p>
    </>
  );
}

// logo, screenshot?, description of the game
//splash logo, then scroll down to see screenshots + descriptions
