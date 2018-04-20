import { fork, all } from 'redux-saga/effects';

import loginRootSaga from './containers/auth/login/sagas';

function* rootSaga() {
  yield all([
    fork(loginRootSaga)
  ]);
}

export default rootSaga;