import React from 'react';
import { useDispatch } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cartActions';

import './CheckoutItem.scss';


export const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch = useDispatch();
  const clearItem = () => dispatch(clearItemFromCart(cartItem));

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={clearItem}>&#10008;</span>
    </div>
  );
};