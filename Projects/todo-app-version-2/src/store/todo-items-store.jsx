import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  ItemsToDo: [],
  handleNewItem: () => {},
  handleDeleteItem: () => {},
});

const todoItemsReducer = (currTodoItems, action) => {
  let newItemsToDo = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newItemsToDo = [
      ...currTodoItems,
      { name: action.payload.todoName, dueDate: action.payload.tododate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newItemsToDo = currTodoItems.filter(
      (item) => item.name !== action.payload.todoItemName
    );
  }
  return newItemsToDo;
};

const TodoItemsContextProvider = ({ children }) => {
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
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        ItemsToDo,
        handleNewItem,
        handleDeleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
