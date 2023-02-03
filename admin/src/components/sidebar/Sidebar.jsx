import "./sidebar.css";
import {useState} from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [open, setOpen] = useState(true);
  return (
    <div className={ !open ?"sidebar active_sidebar_container ":"sidebar"}>
        <div className="sidebar_menu_icon">
              <i class="fa-solid fa-bars " onClick={()=>setOpen(!open)}></i>
        </div>
     { open &&  <div className="sidebar_wrapper">
            
            <div className="sidebar_menu">
                <h3 className="sidebar_title">Dashboard</h3>
                <ul className="sidebar_list">
                      <li className="sidebarlistitem"> <Link to="/user"><i class="fa-solid fa-xmarks-lines"></i> <span className="sidebar_link">user</span></Link></li>
                      <li className="sidebarlistitem"> <Link to="/produclist"><i class="fa-solid fa-arrow-trend-up"></i> <span className="sidebar_link">products</span></Link></li>
                      <li className="sidebarlistitem"> <Link to=""><i class="fa-solid fa-bars-staggered"></i> <span className="sidebar_link">Sales</span></Link></li>

                </ul>
            </div>
              <div className="sidebar_menu">
                  <h3 className="sidebar_title"> Quick Menu</h3>
                  <ul className="sidebar_list">
                      <li className="sidebarlistitem"> <Link to=""><i class="fa-solid fa-xmarks-lines"></i> <span className="sidebar_link">Users</span></Link></li>
                      <li className="sidebarlistitem"> <Link to="/produclist"><i class="fa-solid fa-arrow-trend-up"></i> <span className="sidebar_link">Products</span></Link></li>
                      <li className="sidebarlistitem"> <Link to=""><i class="fa-solid fa-bars-staggered"></i> <span className="sidebar_link">Reports</span></Link></li>

                  </ul>
              </div>
              <div className="sidebar_menu">
                  <h3 className="sidebar_title">Notification</h3>
                  <ul className="sidebar_list">
                      <li className="sidebarlistitem"> <a href=""><i class="fa-solid fa-xmarks-lines"></i> <span className="sidebar_link">Mail</span></a></li>
                      <li className="sidebarlistitem"> <a href=""><i class="fa-solid fa-arrow-trend-up"></i> <span className="sidebar_link">Feedback</span></a></li>
                      <li className="sidebarlistitem"> <a href=""><i class="fa-solid fa-bars-staggered"></i> <span className="sidebar_link">Message</span></a></li>

                  </ul>
              </div>

              <div className="sidebar_menu">
                  <h3 className="sidebar_title">Staff</h3>
                  <ul className="sidebar_list">
                      <li className="sidebarlistitem"> <a href=""><i class="fa-solid fa-xmarks-lines"></i> <span className="sidebar_link">Manage</span></a></li>
                      <li className="sidebarlistitem"> <a href=""><i class="fa-solid fa-arrow-trend-up"></i> <span className="sidebar_link">Analytics</span></a></li>
                      <li className="sidebarlistitem"> <a href=""><i class="fa-solid fa-bars-staggered"></i> <span className="sidebar_link">Reports.</span></a></li>

                  </ul>
              </div>
        </div>}
    </div>
  )
}

export default Sidebar