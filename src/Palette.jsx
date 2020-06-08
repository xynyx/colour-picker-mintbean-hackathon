import React, { useState } from "react";
import Colors from "./Colors";
import "./Palette.css";
import setVariation from "./helpers";

var ColorScheme = require("color-scheme");
var scheme = new ColorScheme();

const tinycolor = require("tinycolor2");
scheme.from_hue(100); // Start the scheme
// .scheme('contrast')     // Use the 'triade' scheme, that is, colors
//                       // selected from 3 points equidistant around
//                       // the color wheel.
// // .variation('soft');   // Use the 'soft' color variation

// // const colors = scheme.colors().slice(0, 8);

export default function Palette({ hex, variation, setting }) {
  /**
   * TODO
   * color names
   * hex code
   * random
   * adjust - lighten, brighten, darken, desat, sat, greyscale, spin
   */

  let colors;
  switch (variation) {
    case "tetrad":
      colors = tinycolor(hex).tetrad();
      break;
    case "analogous":
      colors = tinycolor(hex).analogous();
      break;
    case "monochromatic":
      colors = tinycolor(hex).monochromatic();
      break;
    case "splitcomplement":
      colors = tinycolor(hex).splitcomplement();
      break;
    case "triad":
      colors = tinycolor(hex).triad();
      break;
    case "tetrad":
      colors = tinycolor(hex).tetrad();
      break;
    case "complement":
      colors = tinycolor(hex).complement().toHexString();
      break;
  }

  const settings = color => {
    console.log('setting', setting)
    const converter = {
      lighten: tinycolor(color).lighten(1).toString(),
      brighten: tinycolor(color).brighten(1).toString(),
      darken: tinycolor(color).darken(1).toString(),
      desaturate: tinycolor(color).desaturate(1).toString(),
      saturate: tinycolor(color).saturate(1).toString(),
      greyscale: tinycolor(color).greyscale(1).toString(),
      undefined: color
    };

    return converter[setting];
  };


  // console.log('#ff3333', tinycolor("#ff3333").lighten(10).toString())

  let color;
  if (!Array.isArray(colors)) {
    return <Colors hex={colors} />;
  } else {
    color = colors.map(function (t) {
      let hexColor = t.toHexString();
      hexColor = settings(hexColor);
      console.log("hexColor", hexColor);
      console.log("t", t);
      return <Colors hex={hexColor} />;
      // return <Colors hex={`#${t}`} />
      // return t.toHexString();
    });
  }

  return <div id="container">{color}</div>;
}
