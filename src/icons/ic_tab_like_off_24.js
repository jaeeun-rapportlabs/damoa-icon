import React from 'react';
import PropTypes from 'prop-types';

const IcTabLikeOff24 = props => {
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
        d="M3.587 11.463h0c-.826-.922-1.337-2.295-1.337-3.5C2.25 5.07 4.594 2.75 7.5 2.75c1.568 0 2.975.686 3.938 1.778l.562.637.562-.637A5.25 5.25 0 0121.75 8c0 1.161-.507 2.536-1.34 3.505L12 20.875l-8.414-9.412z"
        stroke="#000"
        strokeWidth="1.5"
      ></path>
    </svg>
  );
};

IcTabLikeOff24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IcTabLikeOff24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IcTabLikeOff24;
