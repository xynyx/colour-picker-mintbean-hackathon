import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./Palette";
import Settings from "./Navbar";

function App() {
  return (
    <div className="App">
      <Settings />
      <Palette />
    </div>
  );
}

export default App;
