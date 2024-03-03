import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  return (
    <div class="container">
      <div class="row">
        <div class="col-6">
          <input
            type="text"
            placeholder="Enter the list here"
            onChange={handleNameChange}
          />
        </div>
        <div class="col-4">
          <input type="date" onChange={handleDateChange} />
        </div>
        <div class="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => onNewItem(todoName, dueDate)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
