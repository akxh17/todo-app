import React from "react";

export default function Navbar(props) {
  return (
    <nav className={props.darkMode ? "" : "light"}>
      <h1 className="nav-header">TODO APP</h1>
      <div className="toggler-container">
        <p className="toggler-dark">Dark</p>
        <div className="toggler-slider" onClick={props.handleDarkMode}>
          <div className="toggler-circle"></div>
        </div>
        <p className="toggler-light">Light</p>
      </div>
    </nav>
  );
}
