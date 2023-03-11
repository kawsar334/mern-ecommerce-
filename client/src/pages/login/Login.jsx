import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom"
import { login } from "../../redux/apiCalls";
import "./login.scss";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

const Login = () => {
const dispatch  = useDispatch();
const navigate = useNavigate();
  const { currentUser, loading, error } = useSelector((state) => state.user);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const user = {email, password}
  const handleLogin = (e)=>{
    e.preventDefault();
    login( dispatch ,user)
    if(currentUser.username){
      navigate("/");
    }

    if(error){

      Swal.fire({
        text: "somthing went wrong !"
      })
    }
  

  }

 
  return (
    <div className="login">
      <div className="loginWrapper">
        <form action="" className="loginForm">
          <h1>Login </h1>

          <input type="text" name="" id="" placeholder="Enter Email " onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" name="password" id="" placeholder="Password " onChange={(e)=>setPassword(e.target.value)} />
          <button disabled={loading} onClick={handleLogin}>{ loading?"Loading...":"Login"}</button>
          {error && <span style={{color:"crimson"}}>{error}</span>}
          <p>
            Already have an account ?
            <NavLink to="/register">Register </NavLink >
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login