import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg'

import './Header.scss';


export const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

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
      </div>
    </div>
  );
};
