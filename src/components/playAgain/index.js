import React from "react";
import "./index.css";

const PlayAgain = ({ handleClick, status }) => {
  return (
    <div>
      <div
        className="message"
        style={{ color: status === "lost" ? "red" : "green" }}
      >
        {status === "lost" ? "Game Over" : "Winner!"}
      </div>
      <button onClick={handleClick} className="btn">
        Play Again
      </button>
    </div>
  );
};

export default PlayAgain;
