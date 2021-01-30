//component with logic to perform calculations and render buttons in the DOM
import React, { useState, useEffect } from "react";
import CalculatorKey from "./CalculatorKey";
import LightDarkMode from "./LightDarkMode";
import "../styles/Calculator.css";
import "../styles/App.css";

function Calculator() {
  const [prevValue, setPrevValue] = useState(null);
  const [nextValue, setNextValue] = useState("0");
  const [display, setDisplay] = useState("0");
  const [op, setOp] = useState(null);
  const [sm, setSM] = useState(false);

  useEffect(() => {}, [op, display]);

  const CalculatorOperations = {
    "/": (firstValue, secondValue) => firstValue / secondValue,
    "*": (firstValue, secondValue) => firstValue * secondValue,
    "+": (firstValue, secondValue) => firstValue + secondValue,
    "-": (firstValue, secondValue) => firstValue - secondValue,
  };

  // handle two value operations
  const performOperation = () => {
    let temp = CalculatorOperations[op](
      parseFloat(prevValue),
      parseFloat(nextValue)
    );
    setNextValue("0");
    setDisplay(String(temp));
    setPrevValue(String(temp));
  };

  //handle numeric input
  const handleNum = (number) => {
    let temp = nextValue === "0" ? String(number) : nextValue + number;
    setNextValue(temp);
    setDisplay(temp);
  };

  // logic for sign toggle -> {SM}
  const changeSign = () => {
    let temp =
      (nextValue === "0" ? parseFloat(prevValue) : parseFloat(nextValue)) * -1;
    setNextValue(temp);
    setDisplay(temp);
  };

  // logic for square-root button -> {SM}
  const squareRoot = () => {
    let temp = Math.sqrt(
      nextValue === "0" ? parseFloat(prevValue) : parseFloat(nextValue)
    );
    setDisplay(temp);
    setNextValue(temp);
  };

  // logic for square button -> {SM}
  const numberSquare = () => {
    let temp = Math.pow(
      nextValue === "0" ? parseFloat(prevValue) : parseFloat(nextValue),
      2
    );
    setDisplay(temp);
    setNextValue(temp);
  };

  // handle clear(c) button
  const clearData = () => {
    setDisplay("0");
    setNextValue("0");
    setPrevValue(null);
    setOp(null);
  };

  // Main function to ditribute operations depending on the condition
  const handleOperation = (value) => {
    if (Number.isInteger(value)) {
      handleNum(parseInt(value, 10));
    } else if (value in CalculatorOperations) {
      if (op === null) {
        setOp(value);
        if (nextValue !== "0") {
          setPrevValue(nextValue);
          setNextValue("0");
        }
      }
      if (op) {
        setOp(value);
        setDisplay(prevValue);
      }
      if (prevValue && op && nextValue) {
        performOperation();
      }
    } else if (value === "c") {
      clearData();
    } else if (value === "±") {
      changeSign();
    } else if (value === "√") {
      squareRoot();
    } else if (value === "2^") {
      numberSquare();
    } else if (value === "=") {
      if (op) {
        performOperation();
        setOp(null);
      }
    }
  };

  return (
    <div className="calculator">
      <LightDarkMode />
      <div className="calculator-input">
        <div className="result">{display} </div>
      </div>
      <div className="calculator-keypad">
        <div className="keys-operators">
          <CalculatorKey keyValue={"+"} onClick={handleOperation} />
          <CalculatorKey keyValue={"-"} onClick={handleOperation} />
          <CalculatorKey keyValue={"*"} onClick={handleOperation} />
          <CalculatorKey keyValue={"/"} onClick={handleOperation} />
        </div>
        <div className="keys-numbers">
          <CalculatorKey keyValue={3} onClick={handleOperation} />
          <CalculatorKey keyValue={2} onClick={handleOperation} />
          <CalculatorKey keyValue={1} onClick={handleOperation} />
          <CalculatorKey keyValue={6} onClick={handleOperation} />
          <CalculatorKey keyValue={5} onClick={handleOperation} />
          <CalculatorKey keyValue={4} onClick={handleOperation} />
          <CalculatorKey keyValue={9} onClick={handleOperation} />
          <CalculatorKey keyValue={8} onClick={handleOperation} />
          <CalculatorKey keyValue={7} onClick={handleOperation} />
          <CalculatorKey keyValue={"="} onClick={handleOperation} />
          <CalculatorKey keyValue={0} onClick={handleOperation} />
          <CalculatorKey keyValue={"c"} onClick={handleOperation} />
        </div>
        <div className="keys-sm">
          {sm && <CalculatorKey keyValue={"±"} onClick={handleOperation} />}
          {sm && <CalculatorKey keyValue={"√"} onClick={handleOperation} />}
          {sm && <CalculatorKey keyValue={"2^"} onClick={handleOperation} />}
          <button
            className="button-scientific"
            onClick={() => setSM((prevSM) => !prevSM)}
          >
            Scientific Mode
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
