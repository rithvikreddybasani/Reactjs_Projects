import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import Todo1 from "./Components/Todo1";
import Todo2 from "./Components/Todo2";
import "./App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="todo-container-inside">
        <Todo1></Todo1>
        <Todo2></Todo2>
      </div>
    </center>
  );
}

export default App;
