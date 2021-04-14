import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <div className="container-fluid large">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <h1 className="title mt-5 ml-5">Let&apos;s do some math!</h1>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="calculator mt-5">
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
    </div>
  );
};

export default App;
