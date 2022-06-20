import {configureStore} from "@reduxjs/toolkit";
import CartReducer from "./cart/CartSlice";
import ProductsReducer from "./products/ProductsSlice";

export const store = configureStore({
    reducer:{
        cart: CartReducer,
        products: ProductsReducer
    },
})