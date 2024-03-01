import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter text"
      onKeyDown={handleOnChange}
      className={styles.name}
    />
  );
};

export default FoodInput;
