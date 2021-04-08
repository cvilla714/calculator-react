import operate from './operate';

function calculate(data, buttonName) {
  let { total, next, operation } = data;
  let result;
  const symbols = ['÷', '*', '-', '+'];
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

  if (buttonName === '=') {
    result = {
      total: operate(total, next, operation),
      next: null,
      operation: null,
    };
  }

  if (buttonName === 'AC') {
    result = {
      total: null,
      next: null,
      operation: null,
    };
  }
  if (buttonName === '+/-') {
    result = {
      total: total * -1,
      next: next * -1,
      operation: null,
    };
  }

  if (buttonName === '%') {
    result = {
      total: total * (next / 100),
      next: null,
      operation: null,
    };
  }

  if (symbols.includes(buttonName)) {
    if (!next) {
      result = {
        total,
        next,
        operation: operation ? (operation = buttonName.toString())
          : (operation = buttonName.toString()),
      };
    } else if (next) {
      result = {
        total: operate(total, next, operation),
        next: null,
        operation: operation ? (operation = buttonName.toString())
          : (operation = buttonName.toString()),
      };
    }
  }
  if (numbers.includes(buttonName)) {
    if (!operation) {
      result = {
        total: total ? (total += buttonName.toString()) : (total = buttonName.toString()),
        next,
        operation,
      };
    } else if (operation) {
      result = {
        total,
        next: next ? (next += buttonName.toString()) : (next = buttonName.toString()),
        operation,
      };
    }
  }
  return result;
}

export default calculate;
