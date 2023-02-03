import { publicRequest } from "../reqMethods/RequestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

export const login = async (dispatch, user)=>{

    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
        console.log(res.data)

    }catch(err){
        console.log(err);
        dispatch(loginFailure(err.response.data));
    }
    
};

