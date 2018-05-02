import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import authReducer from '../containers/auth/reducer';

export default () => combineReducers({
  form: formReducer,
  Auth: authReducer,
});
