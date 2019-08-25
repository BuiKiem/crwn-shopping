import React from 'react';

import './CustomButton.scss';


export const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);
