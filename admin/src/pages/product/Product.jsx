import { NavLink } from "react-router-dom"
import "./product.css"

const Product = () => {
  return (
    <div className="product">
          <div className="updatetop">
              <h3 className="updateTitle">Edit Prduct </h3>
              <button className="updateBtn"><NavLink to="/newproduct">Create Product</NavLink></button>
          </div>
          <div className="updatetbottom">
              <div className="updateBottomLeft updateItem">

                  <div className="userProfile">
                      <img src="" alt="" className="userProfileImg" />
                      <div className="userProfileDes">
                          <h2 className="userprofileName">T-SHIRT </h2>
                          <span className="userprofileTitle">BLACK AND WHITE </span>
                      </div>
                  </div>
                  <div className="userDetails">
                      <h3 className="userTitle">Product  Details. </h3>
                      <p className="useritem"><i class="fa-regular fa-user"></i> kawsar99</p>
                      <p className="useritem"><i class="fa-sharp fa-solid fa-briefcase"></i>23-07-1994</p>
                  </div>
                  <div className="userDetails">
                      <h3 className="userTitle">Contact Details. </h3>
                      <p className="useritem"><i class="fa-solid fa-phone"></i> +8810228383838</p>
                      <p className="useritem"><i class="fa-regular fa-envelope"></i>Kawsarfiroz@gmail.com</p>
                      <p className="useritem"><i class="fa-sharp fa-solid fa-briefcase"></i>Bangladesh</p>

                  </div>

              </div>
              <div className="updateBottomright updateItem">
                  <form action="" className="userForm">

                      <div className="userUpdateformleft">
                          <h3 className="userprofileName">Edit</h3>

                          <label htmlFor="name">Product name</label>
                          <input type="text" name="name" id="name" placeholder="product name" />
                          <label htmlFor="title">Product title</label>
                          <input type="text" name="title" id="title" placeholder="prduct title" />
                          <label htmlFor="category">category</label>
                          <input type="text" name="category" id="category" placeholder="category" />
                          <label htmlFor="desc">Product desc</label>
                          <input type="text" name="desc" id="desc" placeholder="Product description " />
                          <label htmlFor="address">color</label>
                          <input type="text" name="color" id="color" placeholder="red" />
                      </div>
                      <div className="userUpdteFormRight">
                          <div className="userImgContainer">
                              <img src="https://images.pexels.com/photos/14341974/pexels-photo-14341974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="userUploadImg" />
                              <label htmlFor="file"><i class="fa-solid fa-arrow-up"></i></label>
                              <input type="file" name="file" id="file" style={{ display: "none" }} />
                          </div>
                          <button className="userformSubmitBtn">Update </button>
                      </div>
                  </form>
              </div>
              {/* <div className="updateBottomRight updateItem">right</div> */}

          </div>
    </div>
  )
}

export default Product