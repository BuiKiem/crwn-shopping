import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

import { CartIcon } from '../CartIcon/CartIcon';
import { CartDropdown } from '../CartDropdown/CartDropdown';

import './Header.scss';


export const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hiddenCart = useSelector(selectCartHidden);

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/collection" className="option">SHOP</Link>
        <Link to="/collection" className="option">CONTACT</Link>
        {
          currentUser
            ? (
              <div className="option" onClick={() => auth.signOut()}>
                SIGN OUT
              </div>
            )
            : (
              <Link className="option" to="/signin">SIGN IN</Link>
            )
        }
        <CartIcon />
      </div>
      { !hiddenCart && <CartDropdown /> }
    </div>
  );
};
