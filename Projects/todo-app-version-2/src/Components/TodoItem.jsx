import { MdDelete } from "react-icons/md";

function TodoItem({ todoName, tododate, onDeleteClick }) {
  return (
    <div class="container">
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => onDeleteClick(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
