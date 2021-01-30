//component to impliment different keys of the calculator
import React from "react";
import "../styles/CalculatorKey.css";

function CalculatorKey(props) {
  return (
    <button
      className={`${props.className}`}
      onClick={() => props.onClick(props.keyValue)}
    >
      {props.keyValue}{" "}
    </button>
  );
}

export default CalculatorKey;
