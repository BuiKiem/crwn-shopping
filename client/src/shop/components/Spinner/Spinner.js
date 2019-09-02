import React from 'react';

import classes from './Spinner.module.scss';


export const Spinner = () => (
  <div className={classes.spinnerOverlay}>
    <div className={classes.spinnerContainer} />
  </div>
);
