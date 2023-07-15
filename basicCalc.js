// node calc.js sum 10 20 30 - 60
// node calc.js sub 50 30 5 - 15
// node calc.js mult 50 3 2 - 300
// node calc.js div 50 5 5 - 2

// console.log(process.argv);

const [operator, ...arguments] = process.argv.slice(2);
const numbers = arguments.map((item) => Number(item));

const calculation = (op, numsArr) => {
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

const result = calculation(operator, numbers);

console.log(result);
