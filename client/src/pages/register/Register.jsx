import { NavLink } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="registerWrapper">
        <form action="" className="registerForm">
          <h1>Register </h1>

          <input type="text" name="" id=""  placeholder="Enter username "/>
          <input type="text" name="" id="" placeholder="Email "/>
          <input type="password" name="password" id="" placeholder="Password "/>
          <input type="text" name="phone" id="" placeholder="+88012345332..." />
          <button>Register</button>
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