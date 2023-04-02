import React from 'react';
import PropTypes from 'prop-types';

const IcTabHomeOff24 = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...otherProps}
    >
      <path
        d="M2.75 21.25V8.425L12 2.875l9.25 5.55V21.25H2.75z"
        stroke="#000"
        strokeWidth="1.5"
      ></path>
      <path d="M12 22v-8" stroke="#000" strokeWidth="1.5"></path>
    </svg>
  );
};

IcTabHomeOff24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IcTabHomeOff24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IcTabHomeOff24;
