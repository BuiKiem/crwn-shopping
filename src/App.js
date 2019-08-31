import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { Homepage } from './shop/pages/Homepage/Homepage';
import { CollectionsPage } from './shop/pages/CollectionsPage/CollectionsPage';
import { SignInSignUpPage } from './shop/pages/SignInSignUpPage/SignInSignUpPage';
import { CheckoutPage } from './shop/pages/CheckoutPage/CheckoutPage';
import { Header } from './shop/components/Header/Header';

import { auth, createUserProfileDocument, addCollectionAndDocuments } from './shop/firebase/firebase.utils';

import { selectCurrentUser } from "./shop/redux/user/userSelectors";
import { setCurrentUser } from './shop/redux/user/userActions';
import { selectCollectionsForOverview } from './shop/redux/collection/collectionSelector';

import './App.css';

function App() {

  const collectionsArray = useSelector(selectCollectionsForOverview);

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

    addCollectionAndDocuments('collections', collectionsArray);

    return (() => unsubscribeFromAuth());
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
