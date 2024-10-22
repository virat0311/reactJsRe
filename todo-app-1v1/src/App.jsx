import { useState } from "react";

import { AppName } from "./component/AppName";
import { AddTodo } from "./component/AddTodo";
import { TodoItem1 } from "./component/TodoItem1";
import { TodoItem2 } from "./component/TodoItem2";
import './App.css'

function App() {
  return (
    <center className="todo-container">
      {" "}
      <AppName />
      <AddTodo />
      <TodoItem1 />
      <TodoItem2 />
    </center>
  );
}

export default App;
