import {createSelector} from "@reduxjs/toolkit";

export const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)