import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: 0,
    reducers : {
        addNewProduct: (state, action) => {
            console.log(state);
        }
    }
})

export const { } = cartSlice;
export default cartSlice.reducer;
