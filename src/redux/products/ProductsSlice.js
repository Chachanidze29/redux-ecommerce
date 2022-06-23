import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products:[],
    error:''
}

const ProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        productsLoaded(state,action) {
            state.products = action.payload;
        },
        productsFailed(state,action) {
            state.error = action.payload;
        }
    }
})

export const {productsLoaded,productsFailed} = ProductsSlice.actions;

export const fetchProducts = ()=> async (dispatch) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(productsLoaded(response.data));
    } catch(err) {
        productsFailed(err.toString());
    }
}

export default ProductsSlice.reducer;