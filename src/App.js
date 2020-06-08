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
  const [settingValue, changeSettingValue] = useState(20);

  /*       lighten: tinycolor(color).lighten(1).toString(),
      brighten: tinycolor(color).brighten(1).toString(),
      darken: tinycolor(color).darken(1).toString(),
      desaturate: tinycolor(color).desaturate(1).toString(),
      saturate: tinycolor(color).saturate(1).toString(),
      greyscale: tinycolor(color).greyscale(1).toString(),
      undefined: color */
  return (
    <div className="App">
      <Settings
        changeSetting={changeSetting}
        changeVariation={changeVariation}
        changeHex={changeHex}
        changeSettingValue={changeSettingValue}
      />
      <Palette settingValue={settingValue} setting={setting} variation={variation} hex={hex} />
    </div>
  );
}

export default App;
