import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import Navbar from './Navbar';

const App = () => {
  const [calculator, setCalculator] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (operation) => {
    setCalculator(calculate(calculator, operation));
  };

  const { total, next, operation } = calculator;

  return (
    <div className="container-fluid large">
      <Navbar />

      <div>
        <h1 className="title">Project Calculator</h1>
        <div className="calculator">
          <Display
            result={`${total || ''}
          ${operation || ''}
          ${(total && next) || ''}
          `}
          />
          <ButtonPanel clickHandler={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default App;
