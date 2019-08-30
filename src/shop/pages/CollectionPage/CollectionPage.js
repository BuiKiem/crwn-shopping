import React from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverview } from '../../components/CollectionOverview/CollectionsOverview';
import { CategoryPage } from '../CategoryPage/CategoryPage';

export const CollectionPage = ({ match }) => (
  <div className="collection-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:categoryId`} component={CategoryPage} />
  </div>
);
