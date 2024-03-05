import { createContext } from "react";

export const TodoItemsContext = createContext({
  ItemsToDo: [],
  handleNewItem: () => {},
  handleDeleteItem: () => {},
});
