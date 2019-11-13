import React from "react";
import "./App.css";
import { CButton } from "./components/atoms/button";
import { Label } from "./components/atoms/label";
import { Paragraph } from "./components/atoms/paragraph";
import { Input } from "./components/atoms/input";
function App() {
  return (
    <div className="App">
      <Label />
      <div className="row m-5">
        <div className="col-md">
          <Paragraph text="this is the first text of a paragraph with atomic design in react, it's not a story book but a way to design things" />
        </div>
        <div className="col-md">
          <Input />
        </div>
      </div>
      <CButton name="Envoyer" />
    </div>
  );
}

export default App;
