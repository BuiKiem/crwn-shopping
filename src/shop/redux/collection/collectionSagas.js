import { takeEvery } from 'redux-saga/effects';

import { collectionActionTypes } from './collectionActionTypes';


export function* fetchCollectionsAsync() {
  yield console.log("I'm fired");
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    collectionActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}
