import { collectionActionTypes } from './collectionActionTypes';
import {converCollectionsSnapShotToObject, firestore} from "../../firebase/firebase.utils";


export const fetchCollectionsStart = () => ({
  type: collectionActionTypes.FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = (collectionsObject) => ({
  type: collectionActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsObject,
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type: collectionActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => (dispatch) => {
  const collectionRef = firestore.collection('collections');
  dispatch(fetchCollectionsStart());

  collectionRef.get()
    .then((snapShot) => {
      const collectionsObject = converCollectionsSnapShotToObject(snapShot);
      dispatch(fetchCollectionsSuccess(collectionsObject));
    })
    .catch((error) => dispatch(fetchCollectionsFailure(error.message)));
};

