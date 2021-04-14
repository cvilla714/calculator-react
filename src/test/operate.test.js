import operate from '../logic/operate';

describe('operate', () => {
  it('should return the correct operation adding two numbers', () => {
    const addTwoNubmers = operate('100', '100', '+');
    expect(addTwoNubmers).toEqual('200');
  });

  it('should not display the correct result when adding two numbers', () => {
    const wrongSum = operate('100', '10', '+');
    expect(wrongSum).not.toEqual('100');
  });

  it('should return the correct result substracting two numbers', () => {
    const substractTwoNumbers = operate('100', '10', '-');
    expect(substractTwoNumbers).toEqual('90');
  });

  it('should not display the correct result by performing a substraction', () => {
    const wrongSubsbraction = operate('100', '50', '-');
    expect(wrongSubsbraction).not.toEqual('25');
  });

  it('should return the correct result multiplyng two numbers', () => {
    const multiplyTwoNumber = operate('100', '100', '*');
    expect(multiplyTwoNumber).toEqual('10000');
  });

  it('should not display the correct result after performing multiplication', () => {
    const wrongMultiplication = operate('100', '20', '*');
    expect(wrongMultiplication).not.toEqual('200');
  });

  it('should return the correct result by dividing number', () => {
    const dividingTwoNumbers = operate('100', '5', '÷');
    expect(dividingTwoNumbers).toEqual('20');
  });

  it('should not display the correct result when performaing division', () => {
    const wrongDivision = operate('100', '50', '÷');
    expect(wrongDivision).not.toEqual('3');
  });

  it('should return the correct result by applying the percentage', () => {
    const percentageOfNumber = operate('100', '10', '%');
    expect(percentageOfNumber).toEqual('10');
  });

  it('should not display the correct result after performing percentage', () => {
    const wrongPercentage = operate('500', '20', '%');
    expect(wrongPercentage).not.toEqual('10');
  });
});
