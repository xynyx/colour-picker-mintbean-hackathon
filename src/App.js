import React, {useState} from "react";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./Palette";
import Settings from "./Navbar";

function App() {
  const [hex, changeHex] = useState("#405c80")
  

  return (
    <div className="App">
      <Settings changeHex={changeHex} />
      <Palette hex={hex}/>
    </div>
  );
}

export default App;
