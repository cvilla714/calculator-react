/* eslint-disable react/button-has-type */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable quotes */
import React from "react";

const nums1 = ["AC", "+/-", "%", "÷"];
const nums2 = [7, 8, 9, "*"];
const nums3 = [4, 5, 6, "-"];
const nums4 = [1, 2, 3, "+"];
const nums5 = [0, ".", "="];
function ButtonPanel() {
  return (
    <div className="group1">
      {nums1.map((num) => (
        <button className={`${num === "÷" && "orange"}`} key={num}>
          {num}
        </button>
      ))}
      {nums2.map((num) => (
        <button className={`${num === "*" && "orange"}`} key={num}>
          {num}
        </button>
      ))}
      {nums3.map((num) => (
        <button className={`${num === "-" && "orange"}`} key={num}>
          {num}
        </button>
      ))}
      {nums4.map((num) => (
        <button className={`${num === "+" && "orange"}`} key={num}>
          {num}
        </button>
      ))}
      {nums5.map((num) => (
        <button className={`${num === "=" && "orange"} ${num === 0 && "bigN"} `} key={num}>
          {num}
        </button>
      ))}
    </div>
  );
}

export default ButtonPanel;
