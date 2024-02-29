import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import Todo1 from "./Components/Todo1";
import Todo2 from "./Components/Todo2";
import "./App.css";
import TodoItem from "./Components/TodoItem";
import List from "./Components/List";

function App() {
  const todoItems = [
    {
      name: "buy milk",
      dueData: "4/10/2023",
    },
    {
      name: "Go to College",
      dueData: "4/10/2023",
    },
  ];
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <List item={todoItems}></List>
    </center>
  );
}
2;
export default App;
