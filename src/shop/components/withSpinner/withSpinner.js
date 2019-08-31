import React from 'react';

import classes from './Spinner.module.scss';


const Spinner = () => (
  <div className={classes.spinnerOverlay}>
    <div className={classes.spinnerContainer} />
  </div>
);

export const withSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => isLoading
  ? <Spinner />
  : <WrappedComponent {...otherProps} />
;
