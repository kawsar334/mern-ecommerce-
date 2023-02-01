import { NavLink } from "react-router-dom";
import "./productList.scss";

const ProductList = ({product}) => {
  return (
    <div className="productList">
      <img src={product.img} alt="" className="productListImg" />
        <div className="productInfo">
        <NavLink to={`/details/${product._id}`}>
        <i class="fa-solid fa-heart"></i>
        </NavLink>
        <NavLink to={`/details/${product._id}`}>
        <i class="fa-solid fa-magnifying-glass"></i>
        </NavLink>
          <NavLink to={`/details/${product._id}`}>
        <i class="fa-solid fa-cart-plus"></i>
        </NavLink>
</div>
    </div>
  )
}

export default ProductList