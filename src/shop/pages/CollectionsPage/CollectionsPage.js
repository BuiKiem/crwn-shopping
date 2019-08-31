import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CollectionsOverview } from '../../components/CollectionOverview/CollectionsOverview';
import { CollectionPage } from '../CategoryPage/CollectionPage';

import { updateCollections } from '../../redux/collection/collectionActions';

import { firestore, converCollectionsSnapShotToObject } from '../../firebase/firebase.utils';

export const CollectionsPage = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection('collections');
    const unsubscribeFromSnapShot = collectionRef.onSnapshot(async (snapShot) => {
      const collectionsObject = converCollectionsSnapShotToObject(snapShot);
      dispatch(updateCollections(collectionsObject));
    });

    return () => unsubscribeFromSnapShot();
  }, [dispatch]);

  return (
    <div className="collection-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
