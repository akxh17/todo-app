import React from "react";
import Navbar from "./Components/Navbar";
import Input from "./Components/Input";
import Todo from "./Components/Todo";
import { nanoid } from "nanoid";

export default function App() {
  const [data, setData] = React.useState([]);
  const [inputData, setInputData] = React.useState({
    inputTitle: "",
    inputBody: "",
  });
  const [darkMode, setDarkMode] = React.useState(true);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!inputData.inputTitle || !inputData.inputBody) {
      alert("Input a task heading and description");
      return;
    }

    const newData = {
      id: nanoid(),
      title: inputData.inputTitle,
      body: inputData.inputBody,
    };

    setData((prevData) => [...prevData, newData]);

    setInputData({
      inputTitle: "",
      inputBody: "",
    });
  }

  function handleDelete(id) {
    setData((prevData) => prevData.filter((todo) => todo.id !== id));
  }

  function toggleMode() {
    setDarkMode((prevDark) => !prevDark);
  }

  return (
    <div className={darkMode ? "main-container" : "main-container-light"}>
      <Navbar darkMode={darkMode} handleDarkMode={toggleMode} />
      <Input
        data={inputData}
        onChangeHandler={handleChange}
        onHandleSubmit={handleSubmit}
        darkMode={darkMode}
      />
      <div>
        {data.map((todo) => (
          <Todo
            key={todo.id}
            title={todo.title}
            body={todo.body}
            id={todo.id}
            onHandleDelete={handleDelete}
            darkMode={darkMode}
          />
        ))}
      </div>
    </div>
  );
}
