import React, { useState, useEffect } from "react";
import "./index.css";
import utils from "../../utils";
import NumberComponents from "../numberDisplay";
import StarComponent from "../starDisplay";
import PlayAgain from "../playAgain";
import useGameState from "../../customHook";

const StarMatch = ({ startNewGame }) => {
  const { stars, available, candidate, seconds, setGameState } = useGameState();

  const candidatesAreWrong = utils.sum(candidate) > stars;
  const gameStatus =
    available.length === 0 ? "won" : seconds === 0 ? "lost" : "active";

  const numberStatus = (number) => {
    if (!available.includes(number)) {
      return "used";
    }
    if (candidate.includes(number)) {
      return candidatesAreWrong ? "wrong" : "candidate";
    }
    return "available";
  };

  const handleNumberClick = (number, currentStatus) => {
    // currentStatus => newStatus
    if (gameStatus !== "active" || currentStatus === "used") {
      return;
    }
    //candidate
    const newCandidate =
      currentStatus === "available"
        ? candidate.concat(number)
        : candidate.filter((cn) => cn !== number);
    setGameState(newCandidate);
  };

  return (
    <div className="game">
      <div className="help">
        Pick 1 or more numbers that sum to the number of stars
      </div>

      <div className="body">
        <div className="left">
          {gameStatus !== "active" ? (
            <PlayAgain handleClick={startNewGame} status={gameStatus} />
          ) : (
            <StarComponent countStar={stars} />
          )}
        </div>

        <div className="right">
          {utils.range(1, 9).map((number) => (
            <NumberComponents
              key={number}
              number={number}
              status={numberStatus(number)}
              click={handleNumberClick}
            />
          ))}
        </div>
      </div>

      <div className="timer">
        <h4>Time Remaining: {seconds}</h4>
        <p>
          {" "}
          N.B: Green for Correct and Already Selected Numbers, Red for Wrongly
          Selected (You can unselect) and Blue for correctly selected 1st Number
          which will be added to 2nd Number and match with the stars (left).
        </p>
      </div>
    </div>
  );
};

export default StarMatch;
