import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'

import { Homepage } from './shop/pages/Homepage/Homepage';
import { CollectionPage } from './shop/pages/CollectionPage/CollectionPage';
import { SignInSignUpPage } from './shop/pages/SignInSignUpPage/SignInSignUpPage';
import { Header } from './shop/components/Header/Header';
import { auth } from './firebase/firebase.utils';

import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });

  });

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/collection" component={CollectionPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
