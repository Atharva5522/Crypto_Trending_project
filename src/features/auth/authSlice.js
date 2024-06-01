import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";


const authSlice = createSlice({
    name : "auth",
    initialState : {
        user :null,
        isLoading :false,
        isError :false,
        isSuccess : false,
        message : "",
    },

    reducers : {},

    extraReducers : (builder) => {
        builder.addCase(registerUser.pending, (state,action) => {
            state.isLoading = true,
            state.isSuccess = false,
            state.isError = false,
            state.message = "";
        }).addCase(registerUser.fulfilled, (state,action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.user = action.payload,
            state.message = "";
        }).addCase(registerUser.rejected, (state,action) => {
            state.isLoading = false,
            state.isSuccess = false,
            state.isError = true,
            state.message = action.payload;
        }).addCase(loginUser.pending, (state,action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
        }).addCase(loginUser.fulfilled, (state,action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.user = action.payload;
            state.message = "";
        }).addCase(loginUser.rejected, (state,action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
        }).addCase(logoutUser.fulfilled, (state,action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;
            state.message = "";
            state.user = null;
        })

    }

})

export default authSlice.reducer;

// Register User

export const registerUser = createAsyncThunk(
    "AUTH/REGISTER",
async (formData) => {
    try {
        return await authService.register(formData)

    } catch (error) {
        console.log(error)
    }
} );



// Login User

export const loginUser = createAsyncThunk(
    "AUTH/LOGIN",
    async (login) => {
        try {
            return await authService.signup(login)
            
        } catch (error){
            console.log(error)
            
        }

    }
);

// Logout User

export const logoutUser = createAsyncThunk("AUTH/LOGOUT",async()=>{
    localStorage.removeItem('user')
})


