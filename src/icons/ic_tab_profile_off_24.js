import React from 'react';
import PropTypes from 'prop-types';

const IcTabProfileOff24 = props => {
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
        d="M12 10.5l-9.25 6v4.75h18.5V16.5L13 11.1l-1-.6zm0 0c-1.5-1-3.5-2.6-3.5-5 0-2.25 1.5-3.75 3.5-3.75s3.5 1.5 3.5 3.75c0 2.55-2 4-3.5 5z"
        stroke="#000"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

IcTabProfileOff24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IcTabProfileOff24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IcTabProfileOff24;
