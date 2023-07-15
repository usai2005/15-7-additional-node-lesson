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

module.exports = calculation;
