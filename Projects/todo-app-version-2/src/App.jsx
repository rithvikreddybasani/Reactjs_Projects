import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import "./App.css";
import List from "./Components/List";
import TodoItemsContextProvider, {
  TodoItemsContext,
} from "./store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center class="todo-container">
        <AppName></AppName>
        <AddTodo></AddTodo>
        <List></List>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
