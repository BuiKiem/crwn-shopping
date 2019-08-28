import React from 'react';

import { CustomButton } from '../CustomButton/CustomButton';

import './CollectionItem.scss';


export const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className="collection-item">
    <div
      className="image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="collection-footer">
      <span className="name">{ name }</span>
      <span className="price">{ price }</span>
    </div>

    <CustomButton inverted>ADD TO CART</CustomButton>
  </div>
);
