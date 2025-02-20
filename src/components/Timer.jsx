import { useState, useEffect } from "react";

const Timer = ({ isRunning, setIsRunning, time, setTime }) => {
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  return <p>⏳ Temps : {time}s</p>;
};

export default Timer;
