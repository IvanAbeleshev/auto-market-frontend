import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { IUser } from "../interfaces/IUser";
import { AppState } from "./store";

interface IAuthInitialState{
    authState:boolean,
    token: string,
    user?: IUser
}

const initialState:IAuthInitialState = {
    authState: false,
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setAuthState(state, action) {
            state.authState = action.payload.state
            state.token = action.payload.token
            if(action.payload.user){
                state.user = action.payload.user
            }
          },    
    },
    extraReducers: {
      [HYDRATE]: (state, action) => {
        return {
          ...state,
          ...action.payload.auth,
        };
      },
    },
    
})

export const { setAuthState } = authSlice.actions

export const selectAuthState = (state: AppState) => state.auth

export default authSlice.reducer