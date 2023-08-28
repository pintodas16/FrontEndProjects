import { useState } from "react";

function Calculator() {
  let [number, setNumber] = useState("");
  const [equation, setEuation] = useState("");
  const handleBtnClick = (e) => {
    let tempNumber = "";
    let tempEquation = "";
    switch (e.target.value) {
      case "+":
        tempNumber = number + "+";
        // console.log(tempNumber);
        tempEquation = equation + tempNumber;
        setEuation(tempEquation);
        setNumber("+");
        break;
      case "-":
        tempNumber = number + "-";
        // console.log(tempNumber);
        tempEquation = equation + tempNumber;
        setEuation(tempEquation);
        setNumber("-");
        break;
      case "X":
        tempNumber = number + "*";
        // console.log(tempNumber);
        tempEquation = equation + tempNumber;
        setEuation(tempEquation);
        setNumber("X");
        break;
      case "/":
        tempNumber = number + "/";
        // console.log(tempNumber);
        tempEquation = equation + tempNumber;
        setEuation(tempEquation);
        setNumber("/");
        break;
      case "=":
        tempNumber = number + "=";
        // console.log(tempNumber);
        tempEquation = equation + tempNumber;
        // console.log(tempEquation);
        setEuation(tempEquation);

        break;
      default:
        if (
          number[0] === "/" ||
          number[0] === "X" ||
          number[0] === "+" ||
          number[0] === "-"
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
      <div className="w-[20rem] h-96 border border-red-400 grid grid-cols-4 grid-rows-6 gap-2 ">
        <div className="border border-red-800 col-span-4">
          <input
            className="w-full text-right font-semibold text-xl"
            type="text"
            value={equation}
            disabled
          />
          <input
            className=" w-full text-right font-semibold text-xl"
            type="text"
            value={number}
            disabled
          />
        </div>
        <button
          value="AC"
          onClick={handleBtnClick}
          className="border col-span-2"
        >
          AC
        </button>
        <button
          value="/"
          onClick={handleBtnClick}
          className="h-full w-full border "
        >
          /
        </button>
        <button value="X" onClick={handleBtnClick} className="border">
          X
        </button>
        <button
          value="-"
          onClick={handleBtnClick}
          className="border col-[_4/_5] "
        >
          -
        </button>
        <button
          value="+"
          onClick={handleBtnClick}
          className="border col-[_4/_5]"
        >
          +
        </button>
        <button
          value="="
          onClick={handleBtnClick}
          className="border col-[_4/_5] row-span-2"
        >
          =
        </button>
        <button
          value="7"
          onClick={handleBtnClick}
          className="border row-[_3/_4] "
        >
          7
        </button>
        <button
          value="8"
          onClick={handleBtnClick}
          className="border row-[_3/_4]"
        >
          8
        </button>
        <button
          value="9"
          onClick={handleBtnClick}
          className="border row-[_3/_4]"
        >
          9
        </button>
        <button
          value="6"
          onClick={handleBtnClick}
          className="border row-[_4/_5]"
        >
          6
        </button>
        <button
          value="5"
          onClick={handleBtnClick}
          className="border row-[_4/_5]"
        >
          5
        </button>
        <button
          value="4"
          onClick={handleBtnClick}
          className="border row-[_4/_5]"
        >
          4
        </button>
        <button
          value="3"
          onClick={handleBtnClick}
          className="border row-[_5/_6]"
        >
          3
        </button>
        <button
          value="2"
          onClick={handleBtnClick}
          className="border row-[_5/_6]"
        >
          2
        </button>
        <button
          value="1"
          onClick={handleBtnClick}
          className="border row-[_5/_6]"
        >
          1
        </button>
        <button
          value="0"
          onClick={handleBtnClick}
          className="border col-span-2"
        >
          0
        </button>
        <button value="." onClick={handleBtnClick} className="border">
          .
        </button>
      </div>
    </section>
  );
}

export default Calculator;
