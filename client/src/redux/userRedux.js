import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    currentUser: "cudljfdlkjf",
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
    },
})

export const { loginStart,loginSuccess,loginFailure, } = userSlice.actions

export default userSlice.reducer 