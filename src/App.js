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
  const [hex, changeHex] = useState("#405c80");
  const [variation, changeVariation] = useState("tetrad");

  return (
    <div className="App">
      <Settings changeVariation={changeVariation} changeHex={changeHex} />
      <Palette variation={variation} hex={hex} />
    </div>
  );
}

export default App;
