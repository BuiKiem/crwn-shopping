import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

import { CollectionsOverview } from '../../components/CollectionOverview/CollectionsOverview';
import { CollectionPage } from '../CategoryPage/CollectionPage';

import { firestore, converCollectionsSnapShotToMap } from '../../firebase/firebase.utils';

export const CollectionsPage = ({ match }) => {
  useEffect(() => {
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async (snapShot) => converCollectionsSnapShotToMap(snapShot));
  }, []);

  return (
    <div className="collection-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};
