import { takeLatest, put, all, call } from 'redux-saga/effects';

import { userActionTypes } from './userActionTypes';
import { googleSignInSuccess, googleSignInFailure } from './userActions';

import { auth, googleAuthProvider, createUserProfileDocument } from '../../firebase/firebase.utils';


function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleAuthProvider);
    console.log(user);

    const userRef = yield call(createUserProfileDocument, user);
    const userSnapShot = yield userRef.get();
    yield put(googleSignInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
  ]);
}
