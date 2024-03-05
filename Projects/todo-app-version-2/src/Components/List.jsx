import { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";

function List() {
  const { ItemsToDo } = useContext(TodoItemsContext);

  return (
    <div className="todo-container-inside">
      {ItemsToDo.map((items) => (
        <TodoItem todoName={items.name} tododate={items.dueDate}></TodoItem>
      ))}
    </div>
  );
}

export default List;
