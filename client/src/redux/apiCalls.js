import { publicRequest } from "../reqMethods/RequestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
export const login = async (dispatch, user)=>{

    dispatch(loginStart());
    try{
        const res = await publicRequest.post('/auth/login', user);
        dispatch(loginSuccess(res.data));
        console.log(res.data)
        if(res.status){
            Swal.fire({
                text:"user Logged in  ",
                timer:1000,
            })
        }
        

    }catch(err){
        console.log(err);
        if(err){
            Swal.fire("something went wrong")
        }
        dispatch(loginFailure(err.response.data));
    }
    
};

