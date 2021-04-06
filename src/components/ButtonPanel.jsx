import React from 'react';
import Button from './Button';

const nums1 = ['AC', '+/-', '%', '÷'];
const nums2 = [7, 8, 9, '*'];
const nums3 = [4, 5, 6, '-'];
const nums4 = [1, 2, 3, '+'];
const nums5 = [0, '.', '='];

function ButtonPanel() {
  return (
    <div className="group1">
      {nums1.map((num) => (
        <Button name={num} key={num} />
      ))}
      {nums2.map((num) => (
        <Button name={num} key={num} />
      ))}
      {nums3.map((num) => (
        <Button name={num} key={num} />
      ))}
      {nums4.map((num) => (
        <Button name={num} key={num} />
      ))}
      {nums5.map((num) => (
        <Button name={num} key={num} />
      ))}
    </div>
  );
}

export default ButtonPanel;
