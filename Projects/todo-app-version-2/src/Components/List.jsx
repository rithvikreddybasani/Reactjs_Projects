import TodoItem from "./TodoItem";

function List({ item }) {
  return (
    <div className="todo-container-inside">
      {item.map((items) => (
        <TodoItem todoName={items.name} tododate={items.dueDate}></TodoItem>
      ))}
    </div>
  );
}

export default List;
