import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Homepage } from './shop/pages/Homepage/Homepage';
import { CollectionsPage } from './shop/pages/CollectionsPage/CollectionsPage';
import { SignInSignUpPage } from './shop/pages/SignInSignUpPage/SignInSignUpPage';
import { CheckoutPage } from './shop/pages/CheckoutPage/CheckoutPage';
import { Header } from './shop/components/Header/Header';

import { selectCurrentUser } from "./shop/redux/user/userSelectors";
import { checkUserSession } from './shop/redux/user/userActions';

import './App.css';

function App() {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

    // const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //
    //     userRef.onSnapshot((snapShot) => {
    //       dispatch(
    //         setCurrentUser({
    //           id: snapShot.id,
    //           ...snapShot.data(),
    //         })
    //       )
    //     });
    //   } else {
    //     dispatch(setCurrentUser(userAuth));
    //   }
    // });
    //
    // return () => unsubscribeFromAuth();
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route path="/collection" component={CollectionsPage} />
        <Route path="/signin" render={() => currentUser ? <Redirect to='/' /> : <SignInSignUpPage />} />
      </Switch>
    </div>
  );
}

export default App;
