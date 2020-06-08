import React, { useState } from "react";
import {
  Navbar,
  Form,
  Button,
  Nav,
  FormControl,
  NavDropdown,
} from "react-bootstrap";

export default function Settings({ changeHex, changeVariation }) {
  const handleHexChange = e => {
    e.preventDefault();
    console.log("e", e.target.value);
    changeHex(e.target.value);
  };

  const handleVariationChange = variation => {
    console.log('variation', variation)
    changeVariation(variation)
  };

  /*  = [ "e69373", "805240", "e6d5cf", "bf5830" ,
             "77d36a", "488040", "d2e6cf", "43bf30" ,
             "557aaa", "405c80", "cfd9e6", "306ebf"  */
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Colour Palette Generator</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          <NavDropdown
            onSelect={e => handleVariationChange(e)}
            title="Variation"
            id="variation"
          >
            <NavDropdown.Item eventKey="analogous">Analogous</NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey="monochromatic">
              Monochromatic
            </NavDropdown.Item>
            <NavDropdown.Divider />

            <NavDropdown.Item eventKey="complement">Complement</NavDropdown.Item>
            <NavDropdown.Item eventKey="splitcomplement">
              Split Complement
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="triad">Triad</NavDropdown.Item>
            <NavDropdown.Item eventKey="tetrad">Tetrad</NavDropdown.Item>
          </NavDropdown>
        </Nav>

        <Form onChange={e => handleHexChange(e)} inline>
          <FormControl type="text" placeholder="#77d36a" className="mr-sm-2" />
        </Form>
      </Navbar>
    </div>
  );
}
