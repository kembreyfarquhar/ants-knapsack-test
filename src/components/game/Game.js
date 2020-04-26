import React, { useState } from "react";
import Room from "./Room";
import Leaderboard from "./Leaderboard";
import Chat from "./Chat";
import "../../styles/game.scss";

export default function Game() {
  const [player, setPlayer] = useState({
    username: "Katie",
    location: { x: 50, y: 50 },
    inventory: {
      items: [{ name: "stick", weight: 3, value: 1 }],
      maxWeight: 15,
    },
  });
  const [room, setRoom] = useState({
    items: [{ name: "rock", weight: 5, value: 3 }],
    exits: ["N"],
  });
  return (
    <div className="game-container">
      <div className="left-panel">
        <Leaderboard player1="Katie" />
        <Chat />
      </div>
      <Room player={player} setPlayer={setPlayer} room={room} />
    </div>
  );
}
