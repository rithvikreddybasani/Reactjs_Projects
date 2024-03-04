import { useRef } from "react";
import { MdAddBox } from "react-icons/md";
``;
function AddTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  return (
    <div class="container">
      <div class="row">
        <div class="col-6">
          <input type="text" ref={todoNameElement} placeholder="" />
        </div>
        <div class="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div class="col-2">
          <button
            type="submit"
            className="btn btn-success"
            onClick={() =>
              onNewItem(
                todoNameElement.current.value,
                todoDateElement.current.value
              )
            }
          >
            <MdAddBox />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
