import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { CollectionsOverview } from '../../components/CollectionOverview/CollectionsOverview';
import { withSpinner } from '../../components/withSpinner/withSpinner';

import { CollectionPage } from '../CategoryPage/CollectionPage';

import { fetchCollectionsStartAsync } from '../../redux/collection/collectionActions';
import { selectIsCollectionsFetching } from '../../redux/collection/collectionSelector';


const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

export const CollectionsPage = ({ match }) => {
  const dispatch = useDispatch();
  const isCollectionsFetching = useSelector(selectIsCollectionsFetching);

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync())
  }, [dispatch]);

  return (
    <div className="collection-page">
      <Route
        exact path={`${match.path}`}
        render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={isCollectionsFetching} {...props} />}
      />
    </div>
  );
};
