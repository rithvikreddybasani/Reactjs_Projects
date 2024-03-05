import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";

import List from "./Components/List";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function App() {
  let [ItemsToDo, SetItemsToDo] = useState([]);

  const handleNewItem = (todoName, tododate) => {
    let newObjectArray = [...ItemsToDo, { name: todoName, dueDate: tododate }];
    SetItemsToDo(newObjectArray);
  };

  const handleDeleteItem = (todoItemName) => {
    let newObjectArrayAfterDeletion = ItemsToDo.filter((individual) => {
      return individual.name !== todoItemName;
    });
    SetItemsToDo(newObjectArrayAfterDeletion);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        ItemsToDo,
        handleNewItem,
        handleDeleteItem,
      }}
    >
      <center class="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        {ItemsToDo.length === 0 ? <h4>Enjoy your day</h4> : null}
        <List></List>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
