import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          handleBuyButton={() => console.log(`${item} is clicked`)}
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
