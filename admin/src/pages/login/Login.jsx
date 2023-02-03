import { useState } from "react";
import "./login.css";
import axios from "axios";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
    const {error, isFetching, } = useSelector((state)=>state.auth);
    
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({})
    const dispatch = useDispatch();

    const handleInputs =(e)=>{
        setInputs((prev)=>{
            return {
                ...prev, [e.target.name]:e.target.value
            }
        })

    }
    const handleSubmit = async(e)=>{
        e.preventDefault();
        login(dispatch, inputs);
        navigate("/user")
    }
  return (
    <div className="login">
        <div className="loginwrapper">
            <form action="" className="loginForm">
                <h1>Signin</h1>
                <input type="email" name="email" required placeholder="Enter your email" onChange={handleInputs} />
                <input type="password" name="password" placeholder="password "  onChange={handleInputs}/>
                <button onClick={handleSubmit } disabled={isFetching}>{isFetching ? "Loading...":"LOGIN"} </button>
                {error && <span style={{color:"crimson"}}>{error}</span>}
                <NavLink to="/newuser"> Don't have any account? <b>Register</b></NavLink>
            </form>
        </div>
    </div>
  )
}

export default Login