import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const nums1 = ['AC', '+/-', '%', '÷'];
const nums2 = [7, 8, 9, '*'];
const nums3 = [4, 5, 6, '-'];
const nums4 = [1, 2, 3, '+'];
const nums5 = [0, '.', '='];

function ButtonPanel({ clickHandler }) {
  return (
    <div className="group1">
      {nums1.map((num) => (
        <Button name={num} key={num} handleClick={clickHandler} />
      ))}
      {nums2.map((num) => (
        <Button name={num} key={num} handleClick={clickHandler} />
      ))}
      {nums3.map((num) => (
        <Button name={num} key={num} handleClick={clickHandler} />
      ))}
      {nums4.map((num) => (
        <Button name={num} key={num} handleClick={clickHandler} />
      ))}
      {nums5.map((num) => (
        <Button name={num} key={num} handleClick={clickHandler} />
      ))}
    </div>
  );
}

export default ButtonPanel;

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};
