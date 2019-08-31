import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CollectionsOverview } from '../../components/CollectionOverview/CollectionsOverview';

import { CollectionPage } from '../CategoryPage/CollectionPage';

import { fetchCollectionsStartAsync } from '../../redux/collection/collectionActions';


export const CollectionsPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync())
  }, [dispatch]);

  return (
    <div className="collection-page">
      <Route
        exact path={`${match.path}`}
        component={CollectionsOverview}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};
