import PropTypes from 'prop-types';
import React from 'react';

function Button({ name, handleClick }) {
  const symbols = name === '÷' || name === '*' || name === '-' || name === '+' || name === '=' ? 'orange' : '';
  const bigN = name === '0' ? 'bigN' : '';
  return (
    <button
      type="button"
      className={`${symbols} ${bigN}`}
      onClick={() => {
        handleClick(name);
      }}
    >
      {name}
    </button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// Button.defaultProps = {
//   name: '',
// };

export default Button;
