import Item from "./Item";

const FoodItems = ({ items }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item key={item} foodItem={item} isChanged={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
