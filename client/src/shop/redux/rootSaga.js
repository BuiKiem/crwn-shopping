import { all, call } from 'redux-saga/effects';

import { collectionSagas } from './collection/collectionSagas';
import { userSagas } from './user/userSagas';
import { cartSagas } from './cart/cartSagas';

export function* rootSaga() {
  yield all([
    call(collectionSagas),
    call(userSagas),
    call(cartSagas),
  ]);
}