import * as constants from './constants';

export const createNotification = (message, status) => ({
  type: constants.CREATE_NOTIFICATION,
  message,
  status,
});

export const destroyNotification = () => ({
  type: constants.DESTROY_NOTIFICATION,
});
