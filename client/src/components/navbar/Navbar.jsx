import { useState } from "react"
import "./navbar.scss"
import {NavLink} from "react-router-dom"
import { useSelector } from "react-redux"

const Navbar = () => {
  const [open, setOpen] = useState(true)
  const { quantity}= useSelector((state)=>state.cart);
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser.email);

  return (
    <div className="navContainer" id="navbar">
    { open &&  <div className="navWrapper">
      <div className="navleft">
        <span><i class="fa-solid fa-sort-down"></i>En</span>
        <div className="navSearch">
          <input type="text" name="" id="" placeholder="Search..." />
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <div className="navmIddle">
        <NavLink to="/" >Continue Shoping</NavLink>
      </div>
      <div className="navRight">
        <ul className="navItems">
            {
              currentUser.username ? <span>{currentUser.username}</span> :  <>
          <li><NavLink  to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </>}
            <li><NavLink to="/cart" className="counterLink">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="count">{quantity}</span></NavLink>
              </li>
        </ul>
      </div>
      </div>}
      <div className="menu" onClick={()=>setOpen(!open)}>
          <i className="fa-solid fa-bars"></i>
      </div>
      
    </div>
  )
}

export default Navbar