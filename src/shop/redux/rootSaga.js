import { all, call } from 'redux-saga/effects';

import { fetchCollectionsStart } from './collection/collectionSagas';
import { userSagas } from './user/userSagas';

export function* rootSaga() {
  yield all([
    call(fetchCollectionsStart),
    call(userSagas),
  ]);
}