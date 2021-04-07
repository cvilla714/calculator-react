import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  let total = 0;

  const divide = () => (num2 === 0 ? 'NaN' : num1.div(num2));

  switch (operation) {
    case '%':
      total = num1.times(num2.div(100));
      break;

    case '÷':
      total = divide(num1, num2);
      break;

    case '*':
      total = num1.times(num2);
      break;

    case '-':
      total = num1.minus(num2);
      break;

    case '+':
      total = num1.add(num2);
      break;
    default:
      total = 'Error: Cannot Perform operation';
      break;
  }
  return total.toString();
};
export default operate;
