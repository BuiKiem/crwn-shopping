import React from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CustomButton } from '../CustomButton/CustomButton';
import { CartItem } from '../CartItem/CartItem';

import { selectCartItems } from '../../redux/cart/cartSelectors';

import './CartDowndown.scss';


export const CartDropdown = withRouter(
  ({ history }) => {
    const cartItems = useSelector(selectCartItems);

    return (
      <div className="cart-dropdown">
        {
          cartItems.length
            ? (
              <div className="cart-items">
                {
                  cartItems.map((item) => <CartItem key={item.id} item={item} />)
                }
              </div>
            )
            : <span className="empty-message">Your cart is empty</span>
        }

        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
      </div>
    );
  }
);
