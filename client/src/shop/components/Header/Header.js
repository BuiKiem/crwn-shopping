import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { selectCurrentUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';

import { signOutStart } from '../../redux/user/userActions';

import { CartIcon } from '../CartIcon/CartIcon';
import { CartDropdown } from '../CartDropdown/CartDropdown';

import classes from './Header.module.scss';


export const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const hiddenCart = useSelector(selectCartHidden);
  const dispatch = useDispatch();

  const onSignOut = (event) => {
    event.preventDefault();
    dispatch(signOutStart());
  };

  return (
    <div className={classes.header}>
      <Link to="/" className={classes.logoContainer}>
        <Logo />
      </Link>
      <div className={classes.options}>
        <Link to="/collection" className={classes.option}>SHOP</Link>
        <Link to="/collection" className={classes.option}>CONTACT</Link>
        {
          currentUser
            ? (
              <div className={classes.option} onClick={onSignOut}>
                SIGN OUT
              </div>
            )
            : (
              <Link className={classes.option} to="/signin">SIGN IN</Link>
            )
        }
        <CartIcon />
      </div>
      { !hiddenCart && <CartDropdown /> }
    </div>
  );
};
