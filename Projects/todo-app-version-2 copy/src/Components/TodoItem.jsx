import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";

function TodoItem({ todoName, tododate }) {
  const { handleDeleteItem } = useContext(TodoItemsContext);

  return (
    <div class="container">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => handleDeleteItem(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
