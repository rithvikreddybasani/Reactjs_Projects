import styles from "./Item.module.css";

const Item = (props) => {
  function handleButton(event) {
    console.log(event);
    console.log(`${props.foodItem}`);
  }

  return (
    <li className="list-group-item rithvik">
      {props.foodItem}{" "}
      <button
        className={`${styles.button} btn btn-info`}
        onClick={(event) => handleButton(event)}
      >
        buy
      </button>
    </li>
  );
};

export default Item;
