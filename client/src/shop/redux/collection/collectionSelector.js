import { createSelector } from 'reselect';


const selectCollectionState = (rootState) => rootState.collection;

export const selectCollections = createSelector(
  [selectCollectionState],
  (collectionState) => collectionState.collections
);

export const selectCollectionsForOverview = createSelector(
  [selectCollections],
  (collections) => collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) => createSelector(
  [selectCollections],
  (collections) => collections ? collections[collectionUrlParam] : {}
);

export const selectIsCollectionsFetching = createSelector(
  [selectCollectionState],
  (collectionState) => collectionState.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectCollectionState],
  (collectionState) => !!collectionState.collections
);
