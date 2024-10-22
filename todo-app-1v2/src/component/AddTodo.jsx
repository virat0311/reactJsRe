import { useContext, useRef, useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import TodoContext from "../store/Item-context";
export function AddTodo({  }) {
  // const[name,setName]=useState('');
  // const[date,setDate]=useState('');
  const newNameElement=useRef('')
  const newDateElement=useRef('')
  // using api context and fetch the function directly
  const todoItemObject=useContext(TodoContext)
const handleClick=(event)=>{
  event.preventDefault()
  let name=newNameElement.current.value;
  let date=newDateElement.current.value;
  console.log(name, date);
  todoItemObject.newItemAdd(name, date);
  newNameElement.current.value=''
  newDateElement.current.value=''
  // setName("")
  // setDate("")
}
  return (
    <form className="row kg-row" onSubmit={handleClick}>
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter todo Here"
          ref={newNameElement}
          // value={name}
          // onChange={(e) => {
          //   setName(e.target.value);
          // }}
          required
        ></input>
      </div>
      <div className="col-4">
        <input
          type="date"
          required
          ref={newDateElement}
          // value={date}
          // onChange={(e) => setDate(e.target.value)}
        ></input>
      </div>
      <div className="col-2">
        <button
          type="submit"
          className="btn btn-success kg-button"
        >
          <IoMdAddCircleOutline />
        </button>
      </div>
    </form>
  );
}