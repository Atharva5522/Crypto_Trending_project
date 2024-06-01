import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinSlice = createSlice({
    name : "coins",
    initialState : {
        coins : [],
        coin :null,
        isLoading : false,
        isError : false,
        isSuccess : false,
    },
    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(fetchTrending.pending, (state,action) => {
            state.isLoading = true,
            state.isError = false,
            state.isSuccess = false;
        }).addCase(fetchTrending.fulfilled, (state,action) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = true;
            state.coins = action.payload;
        }).addCase(fetchTrending.rejected, (state,action) => {
            state.isLoading = false,
            state.isError = true,
            state.isSuccess = false;
        }).addCase(fetchcoin.pending, (state,action) => {
            state.isLoading = true,
            state.isError = false,
            state.isSuccess = false;
        }).addCase(fetchcoin.fulfilled, (state,action) => {
            state.isLoading = false,
            state.isError = false,
            state.isSuccess = true;
            state.coin = action.payload;
        }).addCase(fetchcoin.rejected, (state,action) => {
            state.isLoading = false,
            state.isError = true,
            state.isSuccess = false;
        })
    }
})

export default coinSlice.reducer;

export const fetchTrending = createAsyncThunk("COIN/TRENDING", async() => {

    try {
        return await coinService.fetchTrandingCoins()
        
    } catch (error) {
        console.log(error)
        
    }

});

export const fetchcoin = createAsyncThunk("FETCH/COIN", async(id) => {
    try {
        return await coinService.fetchcoin(id)
    } catch (error) {
        console.log(error)
        
    }
    
})


