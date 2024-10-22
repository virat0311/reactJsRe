import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import TodoContext from "../store/Item-context";
export function TodoItem2({ name, date }) {
  // const handleDelete = (e) => {
  //   console.log(e);
  //   deleteItem(name);
  // };
  
  const todoItemObject=useContext(TodoContext)
  return (
    <div className="row kg-row ">
      <div className="col-6">{name}</div>
      <div className="col-4">{date}</div>
      <div className="col-2">
        <button
          type="button "
          className="btn btn-danger kg-button"
          onClick={() => {
            todoItemObject.handleDelete(name);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
