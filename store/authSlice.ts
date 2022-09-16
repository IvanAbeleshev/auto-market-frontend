import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

interface IAuthInitialState{
    authState:boolean,
    token: string,
    user?: {
        id: number,
        name: string
    }
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
            console.log(action.payload)
            state.authState = action.payload.state
            state.token = action.payload.token
            if(action.payload.user){
                state.user = action.payload.user
            }
          },
    }
})

export const { setAuthState } = authSlice.actions

export const selectAuthState = (state: AppState) => state.auth.authState

export default authSlice.reducer