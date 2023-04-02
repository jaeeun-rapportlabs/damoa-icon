import React from 'react';
import PropTypes from 'prop-types';

const IcTabHomeOn24 = props => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 8l10-6 10 6v14h-9.25v-8h-1.5v8H2V8z"
        fill="#000"
      ></path>
    </svg>
  );
};

IcTabHomeOn24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IcTabHomeOn24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IcTabHomeOn24;
