/* eslint-disable quotes */

import PropTypes from "prop-types";
import React from "react";

function Button({ name }) {
  const symbols = name === "÷" || name === "*" || name === "-" || name === "+" || name === "=" ? "orange" : "";
  const bigN = name === 0 ? "bigN" : "";
  return (
    <button type="button" className={`${symbols} ${bigN}`}>
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: "",
};

export default Button;
