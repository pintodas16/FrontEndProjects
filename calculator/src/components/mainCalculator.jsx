import { useState } from "react";

function mainCalculator({ mainCalculator }) {
  const [number, setNumber] = useState("0");
  const [equation, setEuation] = useState("");
  const [isClickEqual, setIsClickEqual] = useState(false);
  const [result, setResult] = useState("");

  const additionHandle = (e) => {
    if (result) {
      setEuation(result + e.target.value);
      setNumber(e.target.value);
      setResult("");
      setIsClickEqual(false);
    } else {
      setNumber(e.target.value);
      setEuation((prev) => {
        if (prev === "" || prev === "+") {
          return e.target.value;
        } else {
          let ans = removeLastOperator(prev, e.target.value);
          // console.log(ans);
          return ans;
          // return prev + e.target.value;
        }
      });
    }
  };

  const subtractHandle = (e) => {
    if (result) {
      setEuation(result + e.target.value);
      setNumber(e.target.value);
      setResult("");
      setIsClickEqual(false);
    } else {
      setNumber(e.target.value);
      setEuation((prev) => {
        if (prev === "" || prev === "-") {
          return e.target.value;
        } else {
          let ans = removeLastOperator(prev, e.target.value);
          // console.log(ans);
          return ans;
          // return prev + e.target.value;
        }
      });
    }
  };

  const multiplyHandle = (e) => {
    if (result) {
      setEuation(result + "*");
      setNumber(e.target.value);
      setResult("");
      setIsClickEqual(false);
    } else {
      setNumber(e.target.value);
      setEuation((prev) => {
        if (prev === "" || prev === "*") {
          return "*";
        } else {
          let ans = removeLastOperator(prev, "*");
          // console.log(ans);
          return ans;
          // return prev + "*";
        }
      });
    }
  };

  const divisionHandle = (e) => {
    if (result) {
      setEuation(result + e.target.value);
      setNumber(e.target.value);
      setResult("");
      setIsClickEqual(false);
    } else {
      setNumber(e.target.value);
      setEuation((prev) => {
        if (prev === "" || prev === "/") {
          return e.target.value;
        } else {
          let ans = removeLastOperator(prev, e.target.value);
          // console.log(ans);
          return ans;
          // return prev + e.target.value;
        }
      });
    }
  };

  const reset = () => {
    setEuation("");
    setNumber("0");
    setIsClickEqual(false);
    setResult("");
  };

  const removeLastOperator = (prev, currentOperator) => {
    let newEquation = prev.split("");
    // console.log(newEquation, currentOperator);
    if (
      newEquation[newEquation.length - 1] === "+" ||
      newEquation[newEquation.length - 1] === "-" ||
      newEquation[newEquation.length - 1] === "*" ||
      newEquation[newEquation.length - 1] === "/"
    ) {
      if (currentOperator === "-") {
        if (newEquation[newEquation.length - 1] === "-") {
          newEquation.push(" ");
          newEquation.push(currentOperator);
          return newEquation.join("");
        } else {
          newEquation.push(currentOperator);
          return newEquation.join("");
        }
      } else {
        if (currentOperator === "+") {
          if (newEquation[newEquation.length - 1] === "+") {
            newEquation.push(" ");
            newEquation.push(currentOperator);
            return newEquation.join("");
          } else {
            newEquation.pop();
            newEquation.pop();
            newEquation.push(currentOperator);
            return newEquation.join("");
          }
        }
        newEquation.pop();
        newEquation.pop();
        newEquation.push(currentOperator);
        return newEquation.join("");
      }
    } else {
      newEquation.push(currentOperator);
      return newEquation.join("");
    }
  };

  const handleBtnClick = (e) => {
    switch (e.target.value) {
      case "+":
        additionHandle(e);
        // console.log(mainCalculator("5*-5"));
        // if (result) {
        //   setEuation(result + e.target.value);
        //   setNumber(e.target.value);
        //   setResult("");
        //   setIsClickEqual(false);
        // } else {
        //   setNumber(e.target.value);
        //   setEuation((prev) => {
        //     if (prev === "" || prev === "+") {
        //       return e.target.value;
        //     } else {
        //       let ans = removeLastOperator(prev, e.target.value);
        //       // console.log(ans);
        //       return ans;
        //       // return prev + e.target.value;
        //     }
        //   });
        // }
        break;
      case "-":
        subtractHandle(e);
        // if (result) {
        //   setEuation(result + e.target.value);
        //   setNumber(e.target.value);
        //   setResult("");
        //   setIsClickEqual(false);
        // } else {
        //   setNumber(e.target.value);
        //   setEuation((prev) => {
        //     if (prev === "" || prev === "-") {
        //       return e.target.value;
        //     } else {
        //       let ans = removeLastOperator(prev, e.target.value);
        //       // console.log(ans);
        //       return ans;
        //       // return prev + e.target.value;
        //     }
        //   });
        // }
        break;
      case "X":
        multiplyHandle(e);
        // if (result) {
        //   setEuation(result + "*");
        //   setNumber(e.target.value);
        //   setResult("");
        //   setIsClickEqual(false);
        // } else {
        //   setNumber(e.target.value);
        //   setEuation((prev) => {
        //     if (prev === "" || prev === "*") {
        //       return "*";
        //     } else {
        //       let ans = removeLastOperator(prev, "*");
        //       // console.log(ans);
        //       return ans;
        //       // return prev + "*";
        //     }
        //   });
        // }
        break;
      case "/":
        divisionHandle(e);
        // if (result) {
        //   setEuation(result + e.target.value);
        //   setNumber(e.target.value);
        //   setResult("");
        //   setIsClickEqual(false);
        // } else {
        //   setNumber(e.target.value);
        //   setEuation((prev) => {
        //     if (prev === "" || prev === "/") {
        //       return e.target.value;
        //     } else {
        //       let ans = removeLastOperator(prev, e.target.value);
        //       // console.log(ans);
        //       return ans;
        //       // return prev + e.target.value;
        //     }
        //   });
        // }
        break;
      case "AC":
        reset();
        break;
      case ".":
        setNumber((prev) => {
          if (prev === "0") {
            let tempNumber;
            if (equation.length > 0) {
              tempNumber = e.target.value;
              console.log("temp", tempNumber);
              setEuation((prev) => {
                console.log("prev", prev);
                return prev + tempNumber;
              });
            } else {
              tempNumber = prev + e.target.value;
              console.log("temp", tempNumber);
              setEuation((prev) => {
                console.log("prev", prev);
                return prev + tempNumber;
              });
            }
            return tempNumber;
          } else {
            // previous number === operator [+,-,x,/] it must be
            // empty
            if (prev === "+") {
              prev = "";
            }
            let temp = prev.split("").findIndex((char) => char === ".");
            if (temp !== -1) {
              return prev + "";
            } else {
              // console.log("dot");
              setEuation((prev) => {
                return prev + e.target.value;
              });
              return prev + e.target.value;
            }
          }
        });
        break;
      case "=":
        if (!isClickEqual) {
          // console.log("hello");
          setIsClickEqual(true);
          setEuation((prev) => {
            let tempEquation = prev;
            // check the equation have only number

            let tempAns = eval(tempEquation);
            setNumber(tempAns);
            setResult(tempAns);
            return prev + "=" + tempAns;
          });
        }
        break;
      default:
        if (result) {
          setNumber(e.target.value);
          setEuation(e.target.value);
          setResult("");
          setIsClickEqual(false);
        } else {
          setNumber((prev) => {
            if (prev === "0") {
              setEuation(e.target.value);
              return e.target.value;
            } else {
              if (
                prev === "+" ||
                prev === "-" ||
                prev === "X" ||
                prev === "/"
              ) {
                prev = "";
              }
              setEuation((prev) => {
                // console.log(e.target.value);
                return prev + e.target.value;
              });
              return prev + e.target.value;
            }
          });
        }

        break;
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
export default mainCalculator;

// switch (e.target.value) {
//     case "+":
//       setEuation((prev) => {
//         if (prev === "+") {
//           return e.target.value;
//         } else {
//           if (number === "0") {
//             return e.target.value;
//           }
//           setNumber(e.target.value);
//           return prev + number + e.target.value;
//         }
//       });
//       break;
//     case "-":
//       break;
//     case "X":
//       break;
//     case "/":
//       break;
//     case "AC":
//       break;
//     case ".":
//       setNumber((prev) => {
//         if (prev === "0") {
//           return prev + e.target.value;
//         } else {
//           let temp = prev.split("").findIndex((char) => char === ".");
//           console.log(temp);
//           if (temp !== -1) {
//             return prev + "";
//           } else {
//             return prev + e.target.value;
//           }
//         }
//       });
//       break;
//     case "=":
//       if (isClickEqual === false) {
//         setEuation((prev) => {
//           let tempEquation = prev + number;
//           let ans = mainCalculator(tempEquation);
//           setNumber(ans);
//           setIsClickEqual(true);
//           return prev + number + "=" + ans;
//         });
//       }

//       break;
//     default:
//       setNumber((prev) => {
//         if (isClickEqual) {
//           setIsClickEqual(false);
//           setEuation("");
//           return e.target.value;
//         } else {
//           if (prev === "0" || prev === "+") {
//             return e.target.value;
//           } else {
//             if (equation.length > 0 && number[0] === "+") {
//               return e.target.value;
//             }
//             return prev + e.target.value;
//           }
//         }
//       });
//       break;
//   }
