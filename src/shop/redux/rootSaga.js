import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './collection/collectionSagas';

export function* rootSaga() {
  yield all([
    call(fetchCollectionsStart)
  ]);
}