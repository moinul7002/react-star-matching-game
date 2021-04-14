import React, { useState } from "react";
import StarMatch from "../starMatch";

const GameComponent = () => {
  const [gameId, setGameId] = useState(1);

  const handleNewGame = () => {
    setGameId(gameId + 1);
  };
  //unmount and remount using 'key' attribute & clean up side-effects & give a new state
  return <StarMatch key={gameId} startNewGame={handleNewGame} />;
};

export default GameComponent;
