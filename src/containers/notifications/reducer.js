import * as constants from './constants';

export const initialState = {
  show: false,
  message: null,
  status: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CREATE_NOTIFICATION:
      return {
        ...state,
        show: true,
        message: action.message,
        status: action.status,
      };

    case constants.DESTROY_NOTIFICATION:
      return {
        ...state,
        show: false,
        message: null,
        status: null,
      };

    default:
      return state;
  }
};
