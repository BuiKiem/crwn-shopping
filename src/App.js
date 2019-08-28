import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Homepage } from './shop/pages/Homepage/Homepage';
import { CollectionPage } from './shop/pages/CollectionPage/CollectionPage';
import { SignInSignUpPage } from './shop/pages/SignInSignUpPage/SignInSignUpPage';
import { Header } from './shop/components/Header/Header';
import { auth, createUserProfileDocument } from './shop/firebase/firebase.utils';

import { selectCurrentUser } from "./shop/redux/user/userSelectors";
import { setCurrentUser } from './shop/redux/user/userActions';

import './App.css';

function App() {

  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          )
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return (() => unsubscribeFromAuth());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/collection" component={CollectionPage} />
        <Route path="/signin" render={() => currentUser ? <Redirect to='/' /> : <SignInSignUpPage />} />
      </Switch>
    </div>
  );
}

export default App;
