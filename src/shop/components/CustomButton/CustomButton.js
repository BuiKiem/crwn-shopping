import React from 'react';

import './CustomButton.scss';


export const CustomButton = ({ children, ...otherProps }) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
);
