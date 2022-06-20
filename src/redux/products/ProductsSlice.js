import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    products:[],
    error:''
}

const ProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        productsLoading(state) {
            state.loading = true;
        },
        productsLoaded(state,action) {
            state.products = action.payload;
            state.loading = false;
        },
        productsFailed(state,action) {
            state.error = action.payload;
        }
    }
})

export const {productsLoading,productsLoaded,productsFailed} = ProductsSlice.actions;

export const fetchProducts = ()=> async (dispatch) => {
    dispatch(productsLoading());
    try {
        const response = await axios.get('https://fakestoreapi.com/products');
        dispatch(productsLoaded(response.data));
    } catch(err) {
        productsFailed(err.toString());
    }
}

export default ProductsSlice.reducer;