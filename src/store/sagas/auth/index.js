import { call, fork, put, take } from 'redux-saga/effects'

import { api } from '../../../services'

import { authActions } from '../../actions/auth'

// function* signIn(authProvider) {
//   try {
//     const authData = yield call([firebaseAuth, firebaseAuth.signInWithPopup], authProvider);
//     yield put(authActions.signInFulfilled(authData.user));
//     yield history.push('/');
//   }
//   catch (error) {
//     yield put(authActions.signInFailed(error));
//   }
// }

// function* signOut() {
//   try {
//     yield call([firebaseAuth, firebaseAuth.signOut]);
//     yield put(authActions.signOutFulfilled());
//     yield history.replace('/sign-in');
//   }
//   catch (error) {
//     yield put(authActions.signOutFailed(error));
//   }
// }

function* attemptLogin(userObject) {
  try {
    const { username, password } = userObject
    const authObject = yield call(api.attemptLogin(username, password))
    if (authObject) yield put(authActions.loginRequestSuccess())
  } catch (error) {
    yield put(authActions.loginRequestFail())
  }
}


// //=====================================
// //  WATCHERS
// //-------------------------------------

// function* watchSignIn() {
//   while (true) {
//     let { payload } = yield take(authActions.SIGN_IN);
//     yield fork(signIn, payload.authProvider);
//   }
// }

// function* watchSignOut() {
//   while (true) {
//     yield take(authActions.SIGN_OUT);
//     yield fork(signOut);
//   }
// }


//=====================================
//  AUTH SAGAS
//-------------------------------------

export const authSagas = [
  fork(attemptLogin),
];