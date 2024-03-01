import FoodItems from "./Components/FoodItems";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";

function App() {
  //let foodItems = [];
  let foodItems = ["dal", "vegetable", "noodles"];
  return (
    <>
      <Container>
        <h1>Fragments</h1>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
