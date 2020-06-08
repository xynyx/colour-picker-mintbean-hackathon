import React, {useState} from "react";
import Colors from "./Colors"
import "./Palette.css";
var ColorScheme = require('color-scheme');
var scheme = new ColorScheme;



const tinycolor = require("tinycolor2");scheme.from_hue(100)         // Start the scheme 
.scheme('contrast')     // Use the 'triade' scheme, that is, colors
                      // selected from 3 points equidistant around
                      // the color wheel.
// .variation('soft');   // Use the 'soft' color variation

// const colors = scheme.colors().slice(0, 8);






export default function Palette({hex}) {
  const colors = tinycolor(hex).tetrad();
  const color = colors.map(function (t) {
    const hexColor = t.toHexString();
    console.log('t', t)
    return <Colors hex={hexColor} />
    // return <Colors hex={`#${t}`} />
    // return t.toHexString();
  });



  return (
    <div id="container">
      {color}
    </div>
  );
}
