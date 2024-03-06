import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import List from "./Components/List";
import { useReducer, useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";
import TodoItemsContextProvider from "../../todo-app-version-2/src/store/todo-items-store";

const todoItemsReducer = (currTodoItems, action) => {
  let ItemsToDo = currTodoItems;
  if (action.type === "NEW_ITEM") {
    const ItemsToDo = [
      ...currTodoItems,
      { name: action.payload.todoName, dueDate: action.payload.tododate },
    ];
  } else if (action.type === "DELETE_ITEM") return [];
};

function App() {
  // let [ItemsToDo, SetItemsToDo] = useState([]);
  const [ItemsToDo, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const handleNewItem = (todoName, tododate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        todoName,
        tododate,
      },
    };
    dispatchTodoItems(newItemAction);

    // let newObjectArray = [...ItemsToDo, { name: todoName, dueDate: tododate }];
    // SetItemsToDo(newObjectArray);
  };

  const handleDeleteItem = (todoItemName) => {
    let newObjectArrayAfterDeletion = ItemsToDo.filter((individual) => {
      return individual.name !== todoItemName;
    });
    SetItemsToDo(newObjectArrayAfterDeletion);
  };

  return (
    <TodoItemsContextProvider>
      <center class="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        {ItemsToDo.length === 0 ? <h4>Enjoy your day</h4> : null}
        <List></List>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
