import {createSlice} from "@reduxjs/toolkit";
import {addItemToCart, removeItemFromCart} from "../utils/cartUtils";

const initialState = {
    cartItems: []
};

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        CLEAR_ITEM: (state,action)=> ({
            ...state,
            cartItems: state.cartItems.filter(cartItem => cartItem.id === action.payload.id)
        }),
        REMOVE_ITEM:(state,action)=> ({
            ...state,
            cartItems:removeItemFromCart(state.cartItems,action.payload)
        }),
        ADD_ITEM: (state,action)=> ({
            ...state,
            cartItems:addItemToCart(state.cartItems,action.payload)
        }),
        CLEAR_CART: state => ({
            ...state,
            cartItems: []
        })
    }
})

export const {ADD_ITEM,REMOVE_ITEM,CLEAR_ITEM,CLEAR_CART} = CartSlice.actions;
export default CartSlice.reducer;