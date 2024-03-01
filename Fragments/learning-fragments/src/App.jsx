import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  let [foodItems, setShow] = useState(["vegetable", "mango", "banana"]);

  const handleOnChange = (event) => {
    if (event.key === "Enter") {
      let newItem = event.target.value;
      let newArray = [...foodItems, newItem];
      setShow(newArray);
    }
  };

  return (
    <>
      <h1>Hello</h1>
      <Container>
        <h1>Fragments</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>

        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
