import { useContext, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const { handleNewItem } = useContext(TodoItemsContext);

  const handleButtonClick = () => {
    handleNewItem(todoNameElement.current.value, todoDateElement.current.value);
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter text here"
          />
        </div>
        <div class="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div class="col-2">
          <button
            type="submit"
            className="btn btn-success"
            onClick={handleButtonClick}
          >
            <MdAddBox />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
