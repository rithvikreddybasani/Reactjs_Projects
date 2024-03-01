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

  return (
    <>
      <div className="main-container">
        <Input></Input>
        <ButtonComp array={symbols}></ButtonComp>
      </div>
    </>
  );
}

export default App;
