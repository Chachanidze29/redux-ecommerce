import {createSelector} from "@reduxjs/toolkit";

const selectProductState = state => state.products;

export const selectProductItems = createSelector(
    [selectProductState],
    productState => productState.products
)