/* eslint-disable quotes */
import React from "react";
import ButtonPanel from "./ButtonPanel";
import Display from "./Display";

function App() {
  return (
    <div>
      <h1 className="title">Project Calculator</h1>

      <div className="calculator">
        <Display result={0} />
        <ButtonPanel />
      </div>
    </div>
  );
}
export default App;
