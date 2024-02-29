import FoodItems from "./Components/FoodItems";

function App() {
  //let foodItems = [];
  let foodItems = ["dal", "vegetable", "noodles"];
  return (
    <>
      <h1>Fragments</h1>
      {foodItems.length === 0 ? <h3>fuct</h3> : null}
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
