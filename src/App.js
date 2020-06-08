import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Palette from "./Palette";
import Settings from "./Navbar";

/**
 * TODO
 * color names
 * hex code
 * variation dropdown - analogous, monochromatic, splitcomplement, triad, tetrad, complement)
 * random
 * adjust - lighten, brighten, darken, desat, sat, greyscale, spin
 */

function App() {
  const [hex, changeHex] = useState("#5f42ad");
  const [variation, changeVariation] = useState("analogous");
  const [setting, changeSetting] = useState();

  return (
    <div className="App">
      <Settings changeSetting={changeSetting} changeVariation={changeVariation} changeHex={changeHex} />
      <Palette setting={setting} variation={variation} hex={hex} />
    </div>
  );
}

export default App;
