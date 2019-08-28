import React from 'react';
import { useSelector } from 'react-redux';

import { CustomButton } from '../CustomButton/CustomButton';
import { CartItem } from '../CartItem/CartItem';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import './CartDowndown.scss';


export const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        }
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
