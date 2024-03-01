import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  let [textToShow, setTextState] = useState();
  let [foodItems, setFoodItems] = useState([
    "Salad",
    "Green vegetable",
    "roti",
  ]);

  const handleOnChange = (event) => {
    console.log("Hello world");
    setTextState(event.target.value);
  };

  return (
    <>
      <h1>Hello</h1>
      <Container>
        <h1>Fragments</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
