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


  let color;
  if (!Array.isArray(colors)) {
    return <Colors hex={colors} />;
  } else {
    color = colors.map(function (t) {
      const hexColor = t.toHexString();
      console.log("hexColor", hexColor);
      console.log("t", t);
      return <Colors hex={hexColor} />;
      // return <Colors hex={`#${t}`} />
      // return t.toHexString();
    });
  }

  return <div id="container">{color}</div>;
}
