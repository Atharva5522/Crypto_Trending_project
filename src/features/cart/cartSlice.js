import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        cartItem : [],
    },
    reducers : {
    addToCart : (state,action) => {
        return {
            ...state,
            cartItem : [action.payload,...state.cartItem]
        }
    }

    },

    extraReducers : builder =>  {

        builder

    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer