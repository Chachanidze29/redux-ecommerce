import {createSelector} from "@reduxjs/toolkit";

const selectProductState = state => state.products;

export const selectProductItems = createSelector(
    [selectProductState],
    productState => productState.products
)

export const selectProductItemsLoading = createSelector(
    [selectProductState],
    productState => productState.loading
)

export const selectProductItemsError = createSelector(
    [selectProductState],
    productState => productState.error
)