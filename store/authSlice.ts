import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

interface IAuthInitialState{
    authState:boolean,
    token:string
}

const initialState:IAuthInitialState = {
    authState: false,
    token:''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setAuthState(state, action) {
            state.authState = action.payload;
          },
    }
})

export const { setAuthState } = authSlice.actions;

export const selectAuthState = (state: AppState) => state.auth.authState;

export default authSlice.reducer;