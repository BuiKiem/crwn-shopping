import React from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverview } from '../../components/CollectionOverview/CollectionsOverview';
import { CollectionPage } from '../CategoryPage/CollectionPage';

export const CollectionsPage = ({ match }) => (
  <div className="collection-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);
