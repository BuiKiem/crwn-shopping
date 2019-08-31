import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CollectionsOverview } from '../../components/CollectionOverview/CollectionsOverview';
import { CollectionPage } from '../CategoryPage/CollectionPage';

import { withSpinner } from '../../components/withSpinner/withSpinner';

import { updateCollections } from '../../redux/collection/collectionActions';

import { firestore, converCollectionsSnapShotToObject } from '../../firebase/firebase.utils';


const CollectionOverviewWithSpinner = withSpinner(CollectionsOverview);
const CollectionPageWithSpinner = withSpinner(CollectionPage);

export const CollectionsPage = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    const unsubscribeFromSnapShot = collectionRef.onSnapshot(async (snapShot) => {
      const collectionsObject = converCollectionsSnapShotToObject(snapShot);
      dispatch(updateCollections(collectionsObject));

      await setLoading(false);
    });


    return () => unsubscribeFromSnapShot();
  }, [dispatch]);

  return (
    <div className="collection-page">
      <Route
        exact path={`${match.path}`}
        render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />}
      />
    </div>
  );
};
