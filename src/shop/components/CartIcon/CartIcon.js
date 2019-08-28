import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cartActions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './CartIcon.scss';


export const CartIcon = () => {
  const itemCount = useSelector(({ cart: { cartItems } }) => (cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )));

  const dispatch = useDispatch();
  const toggleCart = () => dispatch(toggleCartHidden());

  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{ itemCount }</span>
    </div>
  );
};
