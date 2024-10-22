import { useContext } from "react";
import TodoContext from "../store/Item-context";

export function Welcome({}) {
  const todoItemObject = useContext(TodoContext);

  return todoItemObject.items.length === 0 && <h1>Enjoy your Day!</h1>;
}
