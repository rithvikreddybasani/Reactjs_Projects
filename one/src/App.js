import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

const App = () => {
  const [square, setSquares] = useState(Array(9).fill(""));
  const [user, setUser] = useState("X");

  const check = (index) => {
    const fun = [...square];
    fun[index] = user;
    setSquares(fun);
    setUser(user === "X" ? "0" : "X");
  };

  return (
    <>
      <div className="container">
        {square.map((ind, index) => (
          <Header ind={ind} index={index} select={check} />
        ))}
      </div>
    </>
  );
};

export default App;
