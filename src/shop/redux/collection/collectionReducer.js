import { collectionActionTypes } from './collectionActionTypes';


const INITIAL_STATE = {
  collections: {}
};

export const collectionReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case collectionActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload
      };
    default:
      return state;
  }
};
