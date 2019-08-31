import { collectionActionTypes } from './collectionActionTypes';


const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: '',
};

export const collectionReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };
    case collectionActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case collectionActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};
