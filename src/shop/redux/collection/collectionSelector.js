import { createSelector } from 'reselect';


const selectCollection = (state) => state.collection;

export const selectCollections = createSelector(
  [selectCollection],
  (collection) => collection.collections
);
