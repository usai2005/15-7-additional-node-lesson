class Calculator {
  constructor(operator, numbers) {
    this.operator = operator;
    this.numbers = numbers;
  }

  calculation = (op, numsArr) => {
    switch (op) {
      case "sum":
        return numsArr.reduce((acc, item) => acc + item);

      case "sub":
        return numsArr.reduce((acc, item) => acc - item);

      case "mult":
        return numsArr.reduce((acc, item) => acc * item);

      case "div":
        return numsArr.reduce((acc, item) => acc / item);

      default:
        return "Unknown operation type";
    }
  };
  init = () => {
    return this.calculation(this.operator, this.numbers);
  };
}

const [operator, ...arguments] = process.argv.slice(2);
const numbers = arguments.map((item) => Number(item));

module.exports = new Calculator(operator, numbers);
