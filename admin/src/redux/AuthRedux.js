import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currrentUser:null,
        isFetching:false,
        error:false,
    },
    reducers: {
        loginStart: (state, action) => {
            state.user= null
            state.isFetching=true
            state.error=false
        },
        loginSuccess: (state, action) => {
            state.currrentUser = action.payload
            state.isFetching=false
            state.error= false
        },
        loginFailure:(state, action)=>{
            state.currrentUser = null
            state.isFetching=false
            state.error=action.payload

        },
        logout:(state, action)=>{
            state.currrentUser= null
            state.isFetching=false
            state.error=false
        }
    }
})

export const { loginStart, loginSuccess, loginFailure,logout } = authSlice.actions 
export default authSlice.reducer    ;

