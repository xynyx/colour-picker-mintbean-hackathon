import React from "react";
import { Navbar, Form, Nav, NavDropdown } from "react-bootstrap";
import ColorPicker from '@radial-color-picker/react-color-picker';
import '@radial-color-picker/react-color-picker/dist/react-color-picker.min.css';

const tinycolor = require("tinycolor2");

export default function Settings({
  changeHex,
  changeVariation,
  changeSetting,
  changeSettingValue,
}) {
  const handleHexChange = e => {
    e.preventDefault();
    changeHex(e.target.value);
  };

  const handleVariationChange = variation => {
    changeVariation(variation);
  };

  const changeSettings = e => {
    const setting = e.target.getAttribute("value");
    changeSetting(setting);
  };

  const setRandom = () => {
    const randomColor = tinycolor.random().toHexString();
    changeHex(randomColor);
  };

  const handleSettingValueChange = e => {
    changeSettingValue(e);
  };

  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar.Brand>Colors</Navbar.Brand>
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

              <NavDropdown.Item eventKey="splitcomplement">
                Split Complement
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="triad">Triad</NavDropdown.Item>
              <NavDropdown.Item eventKey="tetrad">Tetrad</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Divider />

            <Nav.Link
              value={"lighten"}
              eventKey={"lighten"}
              onClick={e => changeSettings(e)}
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
            <NavDropdown
              onSelect={e => handleSettingValueChange(e)}
              title="Change Value (%)"
            >
              <NavDropdown.Item eventKey="2">10</NavDropdown.Item>
              <NavDropdown.Item eventKey="4">20</NavDropdown.Item>
              <NavDropdown.Item eventKey="6">30</NavDropdown.Item>
              <NavDropdown.Item eventKey="8">40</NavDropdown.Item>
              <NavDropdown.Item eventKey="12">50</NavDropdown.Item>
              <NavDropdown.Item eventKey="16">60</NavDropdown.Item>
              <NavDropdown.Item eventKey="20">70</NavDropdown.Item>
              <NavDropdown.Item eventKey="30">80</NavDropdown.Item>
              <NavDropdown.Item eventKey="40">90</NavDropdown.Item>
              <NavDropdown.Item eventKey="50">100</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Nav>
        <Nav.Link id="random" onClick={() => setRandom()}>
          Random
        </Nav.Link>
      </Navbar>
    </div>
  );
}
