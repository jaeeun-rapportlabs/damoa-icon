import React from 'react';
import PropTypes from 'prop-types';

const IcTabMarchhomeOn24 = props => {
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
        d="M2 11l10-9 10 9v12h-6v-6H8v6H2V11z"
        fill="#000"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

IcTabMarchhomeOn24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IcTabMarchhomeOn24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IcTabMarchhomeOn24;
