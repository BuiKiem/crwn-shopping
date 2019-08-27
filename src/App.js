import React, { useState, useEffect, useRef } from 'react';
import { Switch, Route } from 'react-router-dom'

import { Homepage } from './shop/pages/Homepage/Homepage';
import { CollectionPage } from './shop/pages/CollectionPage/CollectionPage';
import { SignInSignUpPage } from './shop/pages/SignInSignUpPage/SignInSignUpPage';
import { Header } from './shop/components/Header/Header';
import { auth, createUserProfileDocument } from './shop/firebase/firebase.utils';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = useRef(null);

  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          }, );
        });
      } else {
        setCurrentUser(userAuth);
      }
    });

    return (() => unsubscribeFromAuth());
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/collection" component={CollectionPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
