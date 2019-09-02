import React from 'react';
import { useSelector } from "react-redux";

import { selectDirectorySections } from '../../redux/directory/directorySelector';

import { MenuItem } from '../MenuItem/MenuItem';

import './Directory.scss';


export const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <div className="directory-menu">
      {
        sections.map(({ id, ...otherProps }) => <MenuItem key={id} {...otherProps} />)
      }
    </div>
  );
};
