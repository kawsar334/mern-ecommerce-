

import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/AuthRedux";
import "./topbar.css"

const Topbar = () => {
    const dispatch = useDispatch();
    const {currrentUser} = useSelector((state)=>state.auth);
    const navigate = useNavigate();

    const handleLogout= (e)=>{
        e.preventDefault();      
        if (window.confirm('You want Logout?')) {
            dispatch(logout());
            navigate("/login");
        }
    }

  return (
    <div className="topbar">
        <div className="topbar_wrapper">
            <div className="topleft">
                <Link to="/">
                      <span className="logo">{currrentUser?.others?.username} </span>
                </Link>
            </div>
            <div className="topright">
                <div className="topbar_icon_container">
                      <i class="fa-solid fa-bell"></i>
                      <span className="topicon_bage">1</span>
                </div>
                  <div className="topbar_icon_container">
                      <i class="fa-solid fa-globe"></i>
                      <span className="topicon_bage">2</span>
                  </div>
                  <div className="topbar_icon_container">
                      <i class="fa-solid fa-bell"></i>
                      {/* <span className="topicon_bage">3</span> */}
                  </div>
                 {currrentUser?.others && <div onClick={handleLogout}>
                      <span className="logo">Logout </span>
                  </div>}
                  {currrentUser?.others?.img && <img src={currrentUser?.others?.img ||"https://images.pexels.com/photos/11856438/pexels-photo-11856438.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"} alt=""  className="topbar_img"/>}
            </div>
        </div>  
    </div>
  )
}

export default Topbar
