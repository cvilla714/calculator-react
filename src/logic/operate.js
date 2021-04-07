import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let total = 0;

  switch (operation) {
    case '%':
      total = num1 % num2;
      break;

    case '÷':
      total = num1 / num2;
      break;

    case '*':
      total = num1 * num2;
      break;

    case '-':
      total = num1 - num2;
      break;

    case '+':
      total = num1 + num2;
      break;
    default:
      total = 'Error: Cannot Perform operation';
      break;
  }
  return total.toString();
};
export default operate;
