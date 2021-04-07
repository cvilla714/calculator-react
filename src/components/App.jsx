import React from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

function App() {
  return (
    <div>
      <h1 className="title">Project Calculator</h1>

      <div className="calculator">
        <Display result={calculate} />
        <ButtonPanel />
      </div>
    </div>
  );
}
export default App;
