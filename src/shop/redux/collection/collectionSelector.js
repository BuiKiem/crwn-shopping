import { createSelector } from 'reselect';


const selectCollectionState = (state) => state.collection;

export const selectCollections = createSelector(
  [selectCollectionState],
  (collection) => collection.collections
);

export const selectCollectionsForOverview = createSelector(
  [selectCollections],
  (collections) => collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectCollections],
  (collections) => collections ? collections[collectionUrlParam] : {}
);
