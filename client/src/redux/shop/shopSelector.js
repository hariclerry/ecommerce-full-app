import { createSelector } from "reselect";

const selectCollections = (state) => state.collections;

export const selectShopCollections = createSelector(
  [selectCollections],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectCollections],
  (shop) => shop.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectCollections],
  (shop) => !!shop.collections
);
