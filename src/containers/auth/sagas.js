import { takeLatest, call, put } from 'redux-saga/effects';
import * as constants from './constants';
import * as actions from './actions';
import * as api from './api';


export function* tryLogIn(action) {
  try {
    const response = yield call(api.logIn, action.values.email, action.values.password);
    yield call(api.storeSession, response.headers);
    yield put(actions.logInSuccess(response.data));
  } catch (error) {
    yield put(actions.logInError(error.response));
  }
}

export function* tryLogOut() {
  try {
    yield call(api.cleanSession);
    yield put(actions.logOutSuccess());
  } catch (error) {
    yield put(actions.logOutError(error.response));
  }
}

export function* tryStorageLogIn() {
  try {
    const response = yield call(api.validateToken);
    yield put(actions.storageAuthSuccess(response.data));
  } catch (error) {
    yield put(actions.storageAuthError(error.response));
  }
}

export function* tryRegister(action) {
  try {
    const response = yield call(api.register, action.values);
    yield call(api.storeSession, response.headers);
    yield put(actions.registerSuccess(response.data));
  } catch (error) {
    yield put(actions.registerError(error.response));
  }
}

export function* tryForgotPw(action) {
  try {
    const response = yield call(api.resetPassword, action.email);
    yield put(actions.forgotPwSuccess(response.data));
  } catch (error) {
    console.log(error);
    // yield put(actions.forgotPwError(error.response));
  }
}

function* authRootSaga() {
  yield takeLatest(constants.TRY_LOG_IN, tryLogIn);
  yield takeLatest(constants.TRY_LOG_OUT, tryLogOut);
  yield takeLatest(constants.TRY_STORAGE_AUTH, tryStorageLogIn);
  yield takeLatest(constants.TRY_REGISTER, tryRegister);
  yield takeLatest(constants.TRY_FORGOT_PW, tryForgotPw);
}

export default authRootSaga;
