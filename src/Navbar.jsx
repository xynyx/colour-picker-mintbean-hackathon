import React, { useState } from "react";
import { Navbar, Form, Button, Nav, FormControl } from "react-bootstrap";

export default function Settings({ changeHex }) {
  const handleHexChange = e => {
    e.preventDefault();
    console.log("e", e.target.value);
    changeHex(e.target.value);
  };

  /*  = [ "e69373", "805240", "e6d5cf", "bf5830" ,
             "77d36a", "488040", "d2e6cf", "43bf30" ,
             "557aaa", "405c80", "cfd9e6", "306ebf"  */
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form onChange={e => handleHexChange(e)} inline>
          <FormControl type="text" placeholder="#77d36a" className="mr-sm-2" />
        </Form>
      </Navbar>
    </div>
  );
}
