import React from 'react';
import PropTypes from 'prop-types';

const IcTabCartOn24 = props => {
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
        d="M19 6.25l1 15H4l1-15h14z"
        fill="#000"
        stroke="#000"
        strokeWidth="1.5"
      ></path>
      <path d="M9 10.25h6" stroke="#fff" strokeWidth="1.5"></path>
      <path
        d="M15 4.75v1.5H9v-1.5a3 3 0 116 0z"
        stroke="#000"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

IcTabCartOn24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IcTabCartOn24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IcTabCartOn24;
