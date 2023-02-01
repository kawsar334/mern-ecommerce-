import { NavLink } from "react-router-dom"
import "./catItem.scss"

const CatItem = ({ category }) => {
  return (
    <div className="catItem">
        <img src={category.img} alt="" className="catImg" />
        <div className="catInfo">
            <h3>{category.title}</h3>
        <NavLink to={`/products/${category.cat}`}>
            <button>Shop Now</button>
            </NavLink>
        </div>
    </div>
  );
}

export default CatItem