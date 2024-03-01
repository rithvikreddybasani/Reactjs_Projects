import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";
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
