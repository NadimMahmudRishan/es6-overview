import React from "react";

import "./sunglass.css";
import Watch from "../watch/Watch";
import {
  add,
  multiply,
  devideTwoNumbersAndReturnResult as devide,
} from "../../utility/calculate";

const Sunglass = () => {
  const first = 500;
  const second = 200;
  const number1 = add(first, second);
  const number2 = multiply(first, second);
  const number3 = devide(first, second);
  return (
    <div>
      <p>{number1}</p>
      <p>{number2}</p>
      <p>{number3}</p>
    </div>
  );
};

export default Sunglass;
