import axios from "axios";
import { useState } from "react"
import { NavLink } from "react-router-dom"
import "./register.scss"

const Register = () => {


  const [user, setUser] = useState({});
  const handleChange= (e)=>{
    setUser((prev)=>{
      return{
        ...prev, [e.target.name]:e.target.value
      }
    })
  };

  //handling registration api 

  const handleRegister = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post(`/auth/register/`, user);

      console.log(res.data);

    }catch(err){
      console.log(err);
    }
  }
  return (
    <div className="register">
      <div className="registerWrapper">
        <form action="" className="registerForm">
          <h1>Register </h1>
          <input type="text" name="username" id=""  placeholder="Enter username "  onChange={handleChange}/>
          <input type="text" name="email" id="" placeholder="Email "  onChange={handleChange}/>
          <input type="password" name="password" id="" placeholder="Password "  onChange={handleChange}/>
          <input type="text" name="phone" id="" placeholder="+88012345332..."  onChange={handleChange} />
          <button onClick={handleRegister}>Register</button>
          <p>
            Don't have any account ?
          <NavLink  to="/login">Login </NavLink >
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register