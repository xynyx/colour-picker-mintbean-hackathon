import React, { useState, useEffect } from 'react';
import './App.css';
import Palette from './Palette';
import Settings from './Navbar';
import ColorPicker from '@radial-color-picker/react-color-picker';
import '@radial-color-picker/react-color-picker/dist/react-color-picker.min.css';
import { DarkModeToggle } from './DarkModeToggle';
import useDarkMode from 'use-dark-mode';
const tinycolor = require('tinycolor2');

function App() {
  const [hex, changeHex] = useState('#5f42ad');
  const [variation, changeVariation] = useState('analogous');
  const [setting, changeSetting] = useState();
  const [settingValue, changeSettingValue] = useState(20);
  const darkMode = useDarkMode(true);
  const [color, setColor] = React.useState({
    hue: 90,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });

  useEffect(() => {
    let base = tinycolor(`hsla(${color.hue}, 100%, 50%, 1)`);
    let baseHex = base.toHex();
    changeHex(baseHex);
  }, [color.hue]);

  const onInput = hue => {
    console.log(hue);
    setColor(prev => {
      return {
        ...prev,
        hue,
      };
    }, [color]);

    changeHex(prev => {
      return {
        ...prev,
        hue
      };
    });
  };

  return (
    <div className="App">
      <div className="Interface">
        <ColorPicker {...color} onInput={onInput} initiallyCollapsed={true} />
        <Settings
          changeSetting={changeSetting}
          changeVariation={changeVariation}
          changeHex={changeHex}
          changeSettingValue={changeSettingValue}
        />


      </div>

      <Palette
        settingValue={settingValue}
        setting={setting}
        variation={variation}
        hex={hex}
      />
      <div style={{ position: 'relative' }}>
        <DarkModeToggle />
      </div>
    </div>
  );
}

export default App;
