import styles from "./Item.module.css";

const Item = ({ foodItem, handleBuyButton }) => {
  return (
    <li className="list-group-item rithvik">
      {foodItem}{" "}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        buy
      </button>
    </li>
  );
};

export default Item;
