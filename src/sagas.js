import { fork, all } from 'redux-saga/effects';

import loginRootSaga from './containers/auth/sagas';

function* rootSaga() {
  yield all([
    fork(loginRootSaga),
  ]);
}

export default rootSaga;
