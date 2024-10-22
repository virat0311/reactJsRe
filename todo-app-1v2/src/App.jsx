import { useState } from "react";

import { AppName } from "./component/AppName";
import { AddTodo } from "./component/AddTodo";
import { TodoItem1 } from "./component/TodoItem1";
import "./App.css";
import { Welcome } from "./component/Welcome";
import TodoContext from "./store/Item-context";

function App() {
  const toDoItems = [
    // {
    //   name: "buy apple",
    //   dueDate: "4/10/2024",
    // },
    // {
    //   name: "buy orange",
    //   dueDate: "05/10/2025",
    // },
  ];
  const [items, setItems] = useState(toDoItems);

  const newItemAdd = (itemName, itemDate) => {
    console.log(itemName + " " + itemDate);
    // insted of below usecase use functional update for states other wise it can give wrong info
    // let newItem = [...items, { name: itemName, dueDate: itemDate }];
    // setItems(newItem);
    // below is called funcitonal update
    setItems((currentVal) => {
      let newItem = [...currentVal, { name: itemName, dueDate: itemDate }];
      return newItem;
    });
  };
  const handleDelete = (nameRemove) => {
    console.log(nameRemove);
    let newAfterDel = items.filter((item) => item.name !== nameRemove);
    setItems(newAfterDel);
  };
  //const valueForContext=[{name:'ghee', dueDate:'04/23/2024'}]
  //below using contest api to pass all the props in all componet as object

  return (
    <TodoContext.Provider value={{ items, newItemAdd, handleDelete }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcome />

        <TodoItem1 />
      </center>
    </TodoContext.Provider>
  );
}

export default App;
