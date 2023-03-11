import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    currentUser: null ,
    loading: false,
    error: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state, action) => {
            state.loading=true;
            state.error=false
        },
        loginSuccess:(state, action)=>{
            state.currentUser=action.payload;
            state.loading = false;
            state.error=false ;
        },
        loginFailure: (state, action) => {
           state.currentUser=null;
            state.loading = false;
            state.error=action.payload; 
        },
        logout:(state)=>{
            state.currentUser=null;
            state.loading=false;
            state.error=null ;
        }
    },
})

export const { loginStart,loginSuccess,loginFailure, logout} = userSlice.actions

export default userSlice.reducer 