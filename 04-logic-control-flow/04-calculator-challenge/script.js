const calculator = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      console.log(`${num1} + ${num2} = ${result}`);
      break;
    case "-":
      result = num1 - num2;
      console.log(`${num1} - ${num2} = ${result}`);
      break;
    case "*":
      result = num1 * num2;
      console.log(`${num1} * ${num2} = ${result}`);
      break;
    case "/":
      result = num1 / num2;
      console.log(`${num1} / ${num2} = ${result}`);
      break;
    case "%":
      result = num1 % num2;
      console.log(`${num1} % ${num2} = ${result}`);
      break;
    default:
      console.log("please enter a valid choice!");
  }
};
calculator(2, 3, "-");
