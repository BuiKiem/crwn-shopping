import React from 'react';
import { useDispatch } from 'react-redux';

import { CustomButton } from '../CustomButton/CustomButton';
import { addItem as addItemAction } from '../../redux/cart/cartActions';

import './CollectionItem.scss';


export const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  const addItem = () => dispatch(addItemAction(item));

  return (
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

    <CustomButton inverted onClick={addItem}>ADD TO CART</CustomButton>
  </div>
);
};
