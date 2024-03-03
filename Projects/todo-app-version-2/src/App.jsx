import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";

import List from "./Components/List";
import { useState } from "react";

function App() {
  let todoItems = [];

  let [ItemsToDo, SetItemsToDo] = useState(todoItems);

  const handleNewItem = (todoName, tododate) => {
    let newObject = { todoName, tododate };
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
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      <List item={ItemsToDo} onDeleteClick={handleDeleteItem}></List>
    </center>
  );
}

export default App;
