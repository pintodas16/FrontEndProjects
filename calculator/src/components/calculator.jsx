import { useState } from "react";

function Calculator({ mainCalculator }) {
  // console.log(mainCalculator);
  let [number, setNumber] = useState("0");
  const [equation, setEuation] = useState("");
  const handleBtnClick = (e) => {
    let tempNumber = "";
    let tempEquation = "";
    let ans = "";
    switch (e.target.value) {
      case "+":
        // tempNumber = number + "+";
        // console.log(tempNumber);
        tempEquation = equation + number + "+";
        if (number === "+" && tempEquation[tempEquation.length - 1] === "+") {
          console.log("hello");
          break;
        } else {
          setEuation(tempEquation);
          setNumber("+");
          break;
        }

      case "-":
        tempNumber = number + "-";
        // console.log(tempNumber);
        tempEquation = equation + tempNumber;
        if (number === "-" && tempEquation[tempEquation.length - 1] === "-") {
          break;
        } else {
          setEuation((prev) => {
            if (
              prev[prev.length - 1] === "+" ||
              prev[prev.length - 1] === "-" ||
              prev[prev.length - 1] === "/" ||
              prev[prev.length - 1] === "*"
            ) {
              let tempOperator = prev.split("");
              tempOperator[tempOperator.length - 1] = "";
              tempOperator.join("");
            }
          });
          setNumber("-");
          break;
        }

      case "X":
        tempNumber = number + "*";
        // console.log(tempNumber);
        tempEquation = equation + tempNumber;
        if (number === "X" && tempEquation[tempEquation.length - 1] === "*") {
          break;
        } else {
          setEuation(tempEquation);
          setNumber("X");
          break;
        }

      case "/":
        tempNumber = number + "/";
        // console.log(tempNumber);
        tempEquation = equation + tempNumber;
        if (number === "/" && tempEquation[tempEquation.length - 1] === "/") {
          break;
        } else {
          setEuation(tempEquation);
          setNumber("/");
          break;
        }

      case "=":
        tempNumber = number + "=";
        // console.log(tempNumber);
        tempEquation = equation + tempNumber;
        // console.log(tempEquation);
        setEuation(tempEquation);
        ans = mainCalculator(tempEquation);
        tempEquation += ans;
        setEuation(tempEquation);
        setNumber(ans);
        break;
      case "AC":
        setEuation("");
        setNumber("0");
        break;
      default:
        if (
          number[0] === "/" ||
          number[0] === "X" ||
          number[0] === "+" ||
          number[0] === "-" ||
          number[0] === "0"
        ) {
          let digit = number.split("");
          digit[0] = "";
          number = digit.join("");
        }
        number += e.target.value;
        setNumber(number);
    }
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-[20rem] h-96  grid grid-cols-4 grid-rows-6 gap-2 text-white bg-gray-200 p-2 rounded-xl ">
        <div className="group col-span-4  bg-gray-600 ">
          <input
            className="w-full text-right font-semibold text-xl group-rounded-xl  "
            type="text"
            value={equation}
            disabled
          />
          <input
            id="display"
            className=" w-full text-right font-semibold text-xl group-rounded-xl "
            type="text"
            value={number}
            disabled
          />
        </div>
        <button
          id="clear"
          value="AC"
          onClick={handleBtnClick}
          className="border col-span-2 rounded-lg bg-green-500"
        >
          AC
        </button>
        <button
          id="divide"
          value="/"
          onClick={handleBtnClick}
          className="h-full w-full border rounded-lg bg-red-400 "
        >
          /
        </button>
        <button
          id="multiply"
          value="X"
          onClick={handleBtnClick}
          className="border rounded-lg  bg-red-400"
        >
          X
        </button>
        <button
          id="subtract"
          value="-"
          onClick={handleBtnClick}
          className="border col-[_4/_5] rounded-lg  bg-red-400 "
        >
          -
        </button>
        <button
          id="add"
          value="+"
          onClick={handleBtnClick}
          className="border col-[_4/_5] rounded-lg  bg-red-400"
        >
          +
        </button>
        <button
          id="equals"
          value="="
          onClick={handleBtnClick}
          className="border col-[_4/_5] row-span-2 rounded-lg bg-green-500"
        >
          =
        </button>
        <button
          id="seven"
          value="7"
          onClick={handleBtnClick}
          className="border row-[_3/_4] rounded-lg bg-gray-600 "
        >
          7
        </button>
        <button
          id="eight"
          value="8"
          onClick={handleBtnClick}
          className="border row-[_3/_4] rounded-lg  bg-gray-600"
        >
          8
        </button>
        <button
          id="nine"
          value="9"
          onClick={handleBtnClick}
          className="border row-[_3/_4] rounded-lg  bg-gray-600"
        >
          9
        </button>
        <button
          id="six"
          value="6"
          onClick={handleBtnClick}
          className="border row-[_4/_5] rounded-lg  bg-gray-600"
        >
          6
        </button>
        <button
          id="five"
          value="5"
          onClick={handleBtnClick}
          className="border row-[_4/_5] rounded-lg  bg-gray-600"
        >
          5
        </button>
        <button
          id="four"
          value="4"
          onClick={handleBtnClick}
          className="border row-[_4/_5] rounded-lg  bg-gray-600"
        >
          4
        </button>
        <button
          id="three"
          value="3"
          onClick={handleBtnClick}
          className="border row-[_5/_6] rounded-lg  bg-gray-600"
        >
          3
        </button>
        <button
          id="two"
          value="2"
          onClick={handleBtnClick}
          className="border row-[_5/_6] rounded-lg  bg-gray-600"
        >
          2
        </button>
        <button
          id="one"
          value="1"
          onClick={handleBtnClick}
          className="border row-[_5/_6] rounded-lg  bg-gray-600"
        >
          1
        </button>
        <button
          id="zero"
          value="0"
          onClick={handleBtnClick}
          className="border col-span-2 rounded-lg  bg-gray-600"
        >
          0
        </button>
        <button
          id="decimal"
          value="."
          onClick={handleBtnClick}
          className="border rounded-lg  bg-gray-600"
        >
          .
        </button>
      </div>
    </section>
  );
}

export default Calculator;
