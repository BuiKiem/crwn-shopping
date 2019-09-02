import { userActionTypes } from './userActionTypes';


const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

export const userReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case userActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
      };
    default:
      return state;
  }
};