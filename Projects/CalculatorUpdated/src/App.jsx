import { useState } from "react";
import ButtonComp from "./Components/ButtonComp";
import Input from "./Components/Input";

function App() {
  const symbols = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
  ];

  let [presentExp, SetPresentExp] = useState("");

  const buttonPressed = (event) => {
    if (event.target.value === "=") {
      SetPresentExp(eval(presentExp));
    } else if (event.target.value === "C") {
      presentExp = "";
      SetPresentExp(presentExp);
    }
  };

  return (
    <>
      <div className="main-container">
        <Input result={presentExp}></Input>
        <ButtonComp array={symbols} buttonPressed={buttonPressed}></ButtonComp>
      </div>
    </>
  );
}

export default App;
