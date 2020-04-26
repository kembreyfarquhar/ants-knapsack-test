import React from "react";

export default function Leaderboard(props) {
  return (
    <div className="leaderboard-container">
      <h2>High Scores</h2>
      <p>{props.player1}</p>
    </div>
  );
}
