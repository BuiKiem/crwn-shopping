import { takeEvery, call, put } from 'redux-saga/effects';

import { collectionActionTypes } from './collectionActionTypes';
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./collectionActions";

import { converCollectionsSnapShotToObject, firestore } from '../../firebase/firebase.utils';


export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionsObject = yield call(converCollectionsSnapShotToObject, snapShot);
    yield put(fetchCollectionsSuccess(collectionsObject));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    collectionActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
