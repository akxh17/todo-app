import React from "react";

export default function Input(props) {
  return (
    <div
      className={
        props.darkMode ? "input--container" : "input--container--light"
      }
    >
      <h2 className="input--title">Add Your Task!</h2>
      <form className="input--form" onSubmit={props.onHandleSubmit}>
        <input
          className="input--header"
          type="text"
          placeholder="Todo Heading"
          name="inputTitle"
          value={props.data.inputTitle}
          onChange={props.onChangeHandler}
        />
        <input
          className="input--description"
          type="text"
          placeholder="Brief Description"
          name="inputBody"
          value={props.data.inputBody}
          onChange={props.onChangeHandler}
        />
        <button className="input--button">Add</button>
      </form>
    </div>
  );
}
