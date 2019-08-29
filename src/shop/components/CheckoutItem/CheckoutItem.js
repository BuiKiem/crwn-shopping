import React from 'react';
import { useDispatch } from 'react-redux';

import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cartActions';

import './CheckoutItem.scss';


export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const onClearItem = () => dispatch(clearItemFromCart(cartItem));
  const onAddItem = () => dispatch(addItem(cartItem));
  const onRemoveItem = () => dispatch(removeItem(cartItem));

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={onRemoveItem}>&#10094;</div>
        {quantity}
        <div className="arrow" onClick={onAddItem}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={onClearItem}>&#10008;</span>
    </div>
  );
};