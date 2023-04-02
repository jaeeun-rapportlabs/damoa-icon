import React from 'react';
import PropTypes from 'prop-types';

const IcTabLikeOn24 = props => {
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
        d="M3.028 11.963c-.95-1.061-1.528-2.613-1.528-4C1.5 4.65 4.186 2 7.5 2c1.792 0 3.4.786 4.5 2.031A6 6 0 0122.5 8c0 1.35-.578 2.9-1.528 4L12 22 3.028 11.963z"
        fill="#000"
      ></path>
    </svg>
  );
};

IcTabLikeOn24.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

IcTabLikeOn24.defaultProps = {
  color: 'currentColor',
  size: '24'
};

export default IcTabLikeOn24;
