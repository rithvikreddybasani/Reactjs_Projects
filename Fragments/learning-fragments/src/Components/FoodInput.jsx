import styles from "./FoodInput.module.css";

const FoodInput = () => {
  const changed = (event) => {
    console.log(event.value);
    console.log("changed");
  };

  return (
    <input
      type="text"
      placeholder="Enter text"
      onChange={(event) => changed(event.target)}
      className={styles.name}
    />
  );
};

export default FoodInput;
