import { createSelector } from 'reselect';


const selectCollectionState = (state) => state.collection;

export const selectCollections = createSelector(
  [selectCollectionState],
  (collection) => collection.collections
);

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectCollections],
  (collections) => collections[collectionUrlParam]
);
