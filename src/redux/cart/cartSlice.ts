import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../models/Product";

const initialState: Array<Product> = []

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers : {
        addNewProduct: (state, action) => {
            state.unshift(action.payload);
        }
    }
})

export const { addNewProduct } = cartSlice.actions;
export default cartSlice.reducer;
