/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
import React from "react";
import Button from "./Button";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

function App() {
  return (
    <div>
      <h1 className="title">Project Calculator</h1>
      <div className="calculator">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </div>
  );
}
export default App;
