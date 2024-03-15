import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalid;
    if (isRunning) {
      intervalid = setInterval(() => {
        let some = time + 1;
        setTime(some);
      }, 100);
    } else {
      clearInterval(intervalid);
    }
    return () => clearInterval(intervalid);
  }, [time, isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  function padStart(value) {
    return String(value).padStart(2, "0");
  }

  const end = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <>
      <h1>StopWatch</h1>
      <p>
        {padStart(Math.floor(time / 60))}:{padStart(time % 60)}
      </p>
      <button onClick={start}>Start</button>
      <button onClick={end}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default App;
