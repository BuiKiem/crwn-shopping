import { collectionActionTypes } from './collectionActionTypes';


export const updateCollections = (collectionsObject) => ({
  type: collectionActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsObject,
});
