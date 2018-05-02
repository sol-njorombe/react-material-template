import { takeLatest, call, put } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import * as api from './api';


export function* tryLogIn(action) {
  try {
    const response = yield call(api.logIn, action.values.email, action.values.password);
    yield call(api.storeSession, response.headers);
    yield put(actions.logInSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(actions.logInError(null));
  }
}

export function* tryLogOut() {
  try {
    yield call(api.cleanSession);
    yield put(actions.logOutSuccess());
  } catch (e) {
    console.log(e);
    yield put(actions.logOutError());
  }
}

export function* tryStorageLogIn() {
  try {
    const response = yield call(api.validateToken);
    yield put(actions.storageAuthSuccess(response.data));
  } catch (e) {
    console.log(e);
    yield put(actions.storageAuthError());
  }
}

function* authRootSaga() {
  yield takeLatest(constants.TRY_LOG_IN, tryLogIn);
  yield takeLatest(constants.TRY_LOG_OUT, tryLogOut);
  yield takeLatest(constants.TRY_STORAGE_AUTH, tryStorageLogIn);
}

export default authRootSaga;
