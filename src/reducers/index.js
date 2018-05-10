import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import authReducer from '../containers/auth/reducer';
import notificationReducer from '../containers/notifications/reducer';

export default () => combineReducers({
  form: formReducer,
  Auth: authReducer,
  Notification: notificationReducer,
});
