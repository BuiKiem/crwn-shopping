import React from 'react';
import { Switch, Route } from 'react-router-dom'

import { Homepage } from './shop/pages/Homepage/Homepage';
import { CollectionPage } from './shop/pages/CollectionPage/CollectionPage';

import './App.css';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/collection" component={CollectionPage} />
      </Switch>
    </div>
  );
}

export default App;
