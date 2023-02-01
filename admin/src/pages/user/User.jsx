import { NavLink } from "react-router-dom"
import "./user.css"

const User = () => {
  return (
    <div className="user">
        <div className="updatetop">
            <h3 className="updateTitle">Edit user </h3>
            <button className="updateBtn"><NavLink  to="/newuser">Create</NavLink></button>
        </div>
        <div className="updatetbottom">
            <div className="updateBottomLeft updateItem">
                
                <div className="userProfile">
                    <img src="" alt="" className="userProfileImg" />
                    <div className="userProfileDes">
                        <h2 className="userprofileName">kawsar firoz</h2>
                        <span className="userprofileTitle">Web developer</span>
                    </div>
                </div>
                <div className="userDetails">
                    <h3 className="userTitle">Account Details. </h3>
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

                      <label htmlFor="username">Username</label>
                      <input type="text" name="username" id="username" placeholder="kawsar firoz" />
                      <label htmlFor="email">Email</label>
                      <input type="text" name="email" id="email" placeholder="kawsarfiroz@gmail.com" />
                      <label htmlFor="phone">phone</label>
                      <input type="text" name="" id="" placeholder="phone" />
                      <label htmlFor="address">Address</label>
                      <input type="text" name="" id="" placeholder="address" />
                      <label htmlFor="address">Address</label>
                      <input type="text" name="" id="" placeholder="kawsar firoz" />
                      </div>
                      <div className="userUpdteFormRight">
                          <div className="userImgContainer">
                              <img src="https://images.pexels.com/photos/14341974/pexels-photo-14341974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="userUploadImg" />
                              <label htmlFor="file"><i class="fa-solid fa-arrow-up"></i></label>
                              <input type="file" name="file" id="file"style={{display:"none"}} />
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

export default User