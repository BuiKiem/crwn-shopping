import { takeLatest, call, put, all } from 'redux-saga/effects';

import { collectionActionTypes } from './collectionActionTypes';
import {fetchCollectionsFailure, fetchCollectionsSuccess} from "./collectionActions";

import { converCollectionsSnapShotToObject, firestore } from '../../firebase/firebase.utils';


function* fetchCollectionsAsync() {
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
  yield takeLatest(
    collectionActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* collectionSagas() {
  yield all([
    call(fetchCollectionsStart),
  ]);
}
