import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthRedux";


export const login = async(dispatch, user) =>{
    try{
        dispatch(loginStart())
        const res = await axios.post("/auth/login/",user)
        console.log(res.data)
        dispatch(loginSuccess(res.data))

    }catch(err){
        console.log(err.response.data);
        dispatch(loginFailure(err.response.data))
    }
};