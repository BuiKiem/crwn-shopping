import React from 'react';

import { CustomButton } from '../CustomButton/CustomButton';

import './CartDowndown.scss';


export const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-item">
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);
