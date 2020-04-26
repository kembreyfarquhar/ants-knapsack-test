import { Stage, Sprite, Container } from "react-pixi-fiber";
import React, { useRef, useEffect } from "react";
import * as PIXI from "pixi.js";
import explorer from "../../assets/explorer.png";

export default function Room(props) {
  const { player, setPlayer, room } = props;
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.focus();
  }, [containerRef]);

  useEffect(() => {
    if (
      player.location.y === 0 &&
      player.location.x === 0 &&
      room.exits.includes("N")
    ) {
      alert("You moved to a new room to the north!");
    }
  }, [player.location.x, player.location.y]);

  const handleKeyDown = (e) => {
    console.log("PLAYERX", player.location.x);
    console.log("PLAYERY", player.location.y);

    e.preventDefault();
    movePlayer(e);
  };

  const movePlayer = (e) => {
    // MOVE UP (W)
    if (e.charCode === 119 && player.location.y > 0) {
      setPlayer({
        ...player,
        location: {
          ...player.location,
          y: (player.location.y -= 10),
        },
      });
    }
    // MOVE DOWN (S)
    else if (e.charCode === 115) {
      setPlayer({
        ...player,
        location: {
          ...player.location,
          y: (player.location.y += 10),
        },
      });
    }
    // MOVE LEFT (A)
    else if (e.charCode === 97 && player.location.x > 0) {
      setPlayer({
        ...player,
        location: {
          ...player.location,
          x: (player.location.x -= 10),
        },
      });
    }
    // MOVE RIGHT (D)
    else if (e.charCode === 100) {
      setPlayer({
        ...player,
        location: {
          ...player.location,
          x: (player.location.x += 10),
        },
      });
    }
  };

  const playerClick = (e) => {
    console.log("player click", e);
    alert(`${player.username} says hi!`);
  };

  return (
    <div
      ref={containerRef}
      className="room-container"
      tabIndex="0"
      onKeyPress={handleKeyDown}
    >
      <Stage options={{ backgroundColor: 0x10bb99, width: 400, height: 400 }}>
        <Container interactive>
          <Sprite
            texture={PIXI.Texture.from(explorer)}
            x={player.location.x}
            y={player.location.y}
            pointerdown={playerClick}
            interactive
            cursor="pointer"
          />
        </Container>
      </Stage>
    </div>
  );
}
