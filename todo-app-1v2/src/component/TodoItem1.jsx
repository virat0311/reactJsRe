import { useContext } from "react";
import { TodoItem2 } from "./TodoItem2";
import TodoContext from "../store/Item-context";
export function TodoItem1({  }) {

  const initialItemObject=useContext(TodoContext);
  //console.log(`this is form contextAPI ${todoContextItem}`)
  //console.log(todoContextItem)
  return (
    <>
      {initialItemObject.items.map((item, index) => (
        <TodoItem2
          key={index}
          name={item.name}
          date={item.dueDate}

        ></TodoItem2>
      ))}
    </>
  );
}
