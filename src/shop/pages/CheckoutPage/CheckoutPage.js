import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cartSelectors';

import './CheckoutPage.scss';


export const CheckoutPage = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {
        cartItems.map((cartItem) => <div>{cartItem.name}</div>)
      }

      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};