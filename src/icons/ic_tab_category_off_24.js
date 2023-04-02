import React from 'react';
import PropTypes from 'prop-types';

const IcTabCategoryOff24 = props => {
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
      <path d="M2 5h20" stroke="#000" strokeWidth="1.5"></path>
      <path d="M2 19h20" stroke="#000" strokeWidth="1.5"></path>
      <path d="M2 12h20" stroke="#000" strokeWidth="1.5"></path>
    </svg>
  );
};

IcTabCategoryOff24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IcTabCategoryOff24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IcTabCategoryOff24;
