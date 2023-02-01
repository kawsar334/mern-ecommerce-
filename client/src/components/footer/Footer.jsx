import "./footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <a href="#navbar">Back to top <i class="fa-solid fa-chevron-up"></i> </a>
      <div className="footermiddle">
        <div className="footerItem">
          <h1>Get to know us </h1>
          <ul>
            <li><NavLink to="#">about us</NavLink></li>
            <li><NavLink to="#">Careers</NavLink></li>
          </ul>
        </div>
        <div className="footerItem">
          <h1>Shop with us  </h1>
          <ul>
            <li><NavLink to="#">Your Account </NavLink></li>
            <li><NavLink to="#">Your Orders</NavLink></li>
            <li><NavLink to="#">Your Addresses</NavLink></li>
            <li><NavLink to="#">Your Lists</NavLink></li>

          </ul>
        </div>
        <div className="footerItem">
          <h1>Make money whith us  </h1>
          <ul>
            <li><NavLink to="#">Sell us  </NavLink></li>
            <li><NavLink to="#">Become an affilliate</NavLink></li>
            <li><NavLink to="#">Advertise your Products</NavLink></li>

          </ul>
        </div>
        <div className="footerItem">
          <h1>Let us help You   </h1>
          <ul>
            <li><NavLink to="#">Help   </NavLink></li>
            <li><NavLink to="#">Shipping & Delivery </NavLink></li>
            <li><NavLink to="#">Return & Replacements</NavLink></li>
            <li><NavLink to="#">Download our App </NavLink></li>

          </ul>
        </div>

      </div>
      <div className="footerbottom">
        <p>    Conditions of Use & Sale
         <NavLink to="#">
            Privacy Notice
          </NavLink>
          <NavLink to="#">
          Interest-Based Ads

          </NavLink>
          </p>
        <p>©1996–2022, firozshop.com, Inc. or its affiliates</p>
      </div>

    </div>
  )
}

export default Footer