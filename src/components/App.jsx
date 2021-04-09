import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

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
  );
};

export default App;
