import "./newuser.css"

const NewUser = () => {
  return (
    <div className="newuser">

        <h3 className="newUserTitle">New User </h3>
        <form action="" className="newUserForm">
            <div className="newUserFormLeft">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" id="username" placeholder="Username" />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" placeholder="example@gmail.com"
                 />
                 <label htmlFor="phone">Phone</label>
                 <input type="text" name="phone" id="phone" placeholder="+88172723733222" />
            </div>
            <div className="newUserFormRight">
                {/* <label htmlFor="file">
                      <img src="https://images.pexels.com/photos/14341974/pexels-photo-14341974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Loading..." className="uploadImg" />

                      <i class="fa-solid fa-arrow-up"></i>Upload img </label>
                <input type="file" name="file" id="file" style={{display:"none"}} /> */}
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" />
                <label htmlFor="address"> Address</label>
                <input type="text" name="address" id="addresss" placeholder="Address ." />
                <div className="genderContainer">
                <input type="radio" name="gender" id="gender" />
                <label htmlFor="gender">male</label>
                  <input type="radio" name="gender" id="gender" />
                  <label htmlFor="gender">female</label>
                          <input type="radio" name="gender" id="gender" />
                  <label htmlFor="gender">
                        Others
                  </label>

                </div>
                      <button className="newBtn" >submit</button>
            </div>
        </form>
    </div>
  )
}

export default NewUser