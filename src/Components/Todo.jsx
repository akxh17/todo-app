import Raect from "react";

export default function Todo(props) {
  return (
    <div className={props.darkMode ? "todo-container" : "todo-container-light"}>
      <div className="todo-items">
        <h3 className="todo-header">{props.title}:</h3>
        <p className="todo-description">{props.body}</p>
      </div>
      <div className="todo-icons">
        <button
          className="todo-delete"
          onClick={() => props.onHandleDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
