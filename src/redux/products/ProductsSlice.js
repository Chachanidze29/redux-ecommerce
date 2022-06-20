import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    products:[]
}

const ProductsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        INITIALIZE:(state,action)=>({
            ...state,
            products: [...action.payload]
        })
    }
})

export const {INITIALIZE} = ProductsSlice.actions;

export default ProductsSlice.reducer;