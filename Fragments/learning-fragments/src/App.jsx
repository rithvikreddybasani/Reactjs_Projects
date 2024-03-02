import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import ErrorMessage from "./Components/ErrorMessage";
import { useState } from "react";

function App() {
  let [foodItems, setShow] = useState([]);

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
        <h1 className="heading">Fragments</h1>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
        {foodItems.length === 0 ? <ErrorMessage></ErrorMessage> : null}
      </Container>
    </>
  );
}

export default App;
