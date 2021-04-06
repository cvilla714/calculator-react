import PropTypes from 'prop-types';
import React from 'react';

function Display({ result }) {
  return (
    <div id="display" className="display">
      {result}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: 0,
};

export default Display;
