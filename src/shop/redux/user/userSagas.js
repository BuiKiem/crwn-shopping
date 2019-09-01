import { takeLatest, put, all, call } from 'redux-saga/effects';

import { userActionTypes } from './userActionTypes';
import { signInSuccess, signInFailure } from './userActions';

import { auth, googleAuthProvider, createUserProfileDocument } from '../../firebase/firebase.utils';


function* getSnapShotFromUserAuth(userAuth) {
 try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const userSnapShot = yield userRef.get();

    yield put(signInSuccess({ id: userSnapShot.id, ...userSnapShot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleAuthProvider);

    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);

    yield getSnapShotFromUserAuth(user);
  } catch (error) {
    put(signInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart)
  ]);
}
