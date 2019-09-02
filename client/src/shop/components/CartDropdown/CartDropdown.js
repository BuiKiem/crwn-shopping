import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { CustomButton } from '../CustomButton/CustomButton';
import { CartItem } from '../CartItem/CartItem';

import { selectCartItems } from '../../redux/cart/cartSelectors';
import { toggleCartHidden } from '../../redux/cart/cartActions';

import './CartDowndown.scss';


export const CartDropdown = withRouter(
  ({ history }) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const onCheckout = () => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    };

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

        <CustomButton onClick={onCheckout}>GO TO CHECKOUT</CustomButton>
      </div>
    );
  }
);
