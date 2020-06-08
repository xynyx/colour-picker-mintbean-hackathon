import React, { useState } from "react";
import {
  Navbar,
  Form,
  Button,
  Nav,
  FormControl,
  NavDropdown,
} from "react-bootstrap";

const tinycolor = require("tinycolor2");

export default function Settings({
  changeHex,
  changeVariation,
  changeSetting,
}) {
  const handleHexChange = e => {
    e.preventDefault();
    changeHex(e.target.value);
  };

  const handleVariationChange = variation => {
    changeVariation(variation);
  };

  const changeSettings = (e, data) => {
    const setting = e.target.getAttribute("value");
    changeSetting(setting);
  };

  const setRandom = () => {
    const randomColor = tinycolor.random().toHexString();
    console.log("randomColor", randomColor);
    changeHex(randomColor);
  };

  /*  = [ "e69373", "805240", "e6d5cf", "bf5830" ,
             "77d36a", "488040", "d2e6cf", "43bf30" ,
             "557aaa", "405c80", "cfd9e6", "306ebf"  */
  return (
    <div>
      <Navbar  expand="lg" bg="dark" variant="dark">

        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
          <Navbar.Brand href="#home">Colour Palette Generator</Navbar.Brand>
            <NavDropdown
              onSelect={e => handleVariationChange(e)}
              title="Variation"
              id="variation"
            >
              <NavDropdown.Item eventKey="analogous">
                Analogous
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="monochromatic">
                Monochromatic
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item eventKey="complement">
                Complement
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="splitcomplement">
                Split Complement
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="triad">Triad</NavDropdown.Item>
              <NavDropdown.Item eventKey="tetrad">Tetrad</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              value={"lighten"}
              eventKey={"lighten"}
              onClick={(e, data) => changeSettings(e, data)}
            >
              Lighten
            </Nav.Link>
            <Nav.Link value={"brighten"} onClick={e => changeSettings(e)}>
              Brighten
            </Nav.Link>
            <Nav.Link value={"darken"} onClick={e => changeSettings(e)}>
              Darken
            </Nav.Link>
            <Nav.Link value={"desaturate"} onClick={e => changeSettings(e)}>
              Desaturate
            </Nav.Link>
            <Nav.Link value={"saturate"} onClick={e => changeSettings(e)}>
              Saturate
            </Nav.Link>
            <Nav.Link value={"greyscale"} onClick={e => changeSettings(e)}>
              Greyscale
            </Nav.Link>
            <Nav.Link onClick={() => setRandom()}>Random</Nav.Link>
          </Navbar.Collapse>
        </Nav>

        <Form onChange={e => handleHexChange(e)} inline>
          <FormControl type="text" placeholder="#77d36a" className="mr-sm-2" />
        </Form>
      </Navbar>
    </div>
  );
}

/*  * adjust - lighten, brighten, darken, desat, sat, greyscale, spin */
