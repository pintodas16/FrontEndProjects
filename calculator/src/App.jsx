import { useState } from "react";
import CalculatorMain from "./components/mainCalculator";
function App() {
  let [precesion, setPrecesion] = useState(0);
  const countPrecesion = (number) => {
    number = number.split("");
    const dot = number.findIndex((digit) => digit === ".");
    const pre = Math.max(precesion, number.length - dot + 1);
    setPrecesion(pre);
  };
  const precedence = (char) => {
    if (char === "*" || char === "/") {
      return 2;
    } else if (char === "+" || char === "-") {
      return 1;
    }
  };
  const calculation = (numOne, numTwo, operator) => {
    numOne = parseFloat(numOne);
    numTwo = parseFloat(numTwo);
    if (operator === "+") {
      return numOne + numTwo;
    } else if (operator === "-") {
      return numOne - numTwo;
    } else if (operator === "*") {
      return numOne * numTwo;
    } else if (operator === "/") {
      return numOne / numTwo;
    }
  };
  const mainCalculator = (equation) => {
    console.log(equation);
    const operands = [];
    const operators = [];
    //
    for (let i = 0; i < equation.length; i++) {
      if ((equation[i] >= "0" && equation[i] <= 9) || equation[i] === ".") {
        let multiDigit = "";
        while (
          (equation[i] >= "0" && equation[i] <= 9) ||
          equation[i] === "."
        ) {
          multiDigit += equation[i++];
        }
        countPrecesion(multiDigit);
        operands.push(multiDigit);
        i--;
      } else if (
        equation[i] === "+" ||
        equation[i] === "-" ||
        equation[i] === "*" ||
        equation[i] === "/"
      ) {
        while (
          operators.length !== 0 &&
          precedence(operators[operators.length - 1]) >= precedence(equation[i])
        ) {
          let numTwo = operands.pop();
          let numOne = operands.pop();
          let operator = operators.pop();
          let tempAns = calculation(numOne, numTwo, operator);
          operands.push(tempAns);
        }
        operators.push(equation[i]);
      }
    }

    while (operators.length !== 0) {
      let numTwo = operands.pop();
      let numOne = operands.pop();
      let operator = operators.pop();
      let tempAns = calculation(numOne, numTwo, operator);
      operands.push(tempAns);
    }
    return operands[0];
  };
  return (
    <>
      {/* <Calculator mainCalculator={mainCalculator} /> */}
      <CalculatorMain mainCalculator={mainCalculator} />
    </>
  );
}
export default App;
