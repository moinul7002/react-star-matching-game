import { useState, useEffect } from "react";
import utils from "../utils";

//Custom Hooks
const useGameState = () => {
  const [stars, setStars] = useState(utils.random(1, 9));
  const [available, setAvailable] = useState(utils.range(1, 9));
  const [candidate, setCandidate] = useState([]);
  const [seconds, setSeconds] = useState(10);

  //setInterval to start a timer
  useEffect(() => {
    //setTimeout for Countdown
    if (seconds > 0 && available.length > 0) {
      const timerId = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    }
  });

  const setGameState = (newCandidate) => {
    if (utils.sum(newCandidate) !== stars) {
      setCandidate(newCandidate);
    } else {
      const newAvailable = available.filter((n) => !newCandidate.includes(n));
      //redraw stars from what's available
      setStars(utils.randomSumIn(newAvailable, 9));
      setAvailable(newAvailable);
      setCandidate([]);
    }
  };
  return { stars, available, candidate, seconds, setGameState };
};
export default useGameState;
