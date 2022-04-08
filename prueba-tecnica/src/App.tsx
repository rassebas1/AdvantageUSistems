import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="home-container">
          <h1>bienvenido</h1>
          <form action="">
            <label htmlFor="input-username">user</label>
            <input id="input-username" type="text" />
            <label htmlFor="input-password">password</label>
            <input id="input-password" type="text" />
            <button type="button">
              <Link to="/">
                <span>login</span>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </Router>
  );
}

export default App;
