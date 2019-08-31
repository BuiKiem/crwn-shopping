import React from 'react';

import { Directory } from '../../components/Directory/Directory';

import classes from './Homepage.module.scss';

export const Homepage = () => (
  <div className={classes.homepage}>
    <Directory />
  </div>
);
