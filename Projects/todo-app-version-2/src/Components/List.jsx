import TodoItem from "./TodoItem";

function List({ item, onDeleteClick }) {
  return (
    <div className="todo-container-inside">
      {item.map((items) => (
        <TodoItem
          todoName={items.name}
          tododate={items.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
}

export default List;
