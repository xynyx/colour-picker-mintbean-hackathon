import React, { useState } from "react";
import "./App.css";
import Palette from "./Palette";
import Settings from "./Navbar";
import ColorPicker from '@radial-color-picker/react-color-picker';
import '@radial-color-picker/react-color-picker/dist/react-color-picker.min.css';

function App() {
  const [hex, changeHex] = useState("#5f42ad");
  const [variation, changeVariation] = useState("analogous");
  const [setting, changeSetting] = useState();
  const [settingValue, changeSettingValue] = useState(20);
  const [color, setColor] = React.useState({
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });

  const onInput = hue => {
    console.log(hue);
    setColor(prev => {
      return {
        ...prev,
        hue,
      };
    });
  };

  return (
    <div className="App">

      <Settings
        changeSetting={changeSetting}
        changeVariation={changeVariation}
        changeHex={changeHex}
        changeSettingValue={changeSettingValue}
      />
      <ColorPicker {...color} onInput={onInput} initiallyCollapsed='true' />
      <Palette
        settingValue={settingValue}
        setting={setting}
        variation={variation}
        hex={hex}
      />
    </div>
  );
}

export default App;
