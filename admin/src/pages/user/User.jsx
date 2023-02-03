import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom"
import { userRequest } from "../../api/requestMethods";
import "./user.css";
import axios from "axios";

const User = () => {
    const id = useLocation().pathname.split("/")[2];
    const [user, setUser] = useState({});
    const [isAdmin , setIsAdmin] = useState(false);
    const [file, setFile] = useState(null);
    console.log(isAdmin)
    useEffect(()=>{
        const getUser = async()=>{
            try{
                const res = await userRequest(`/user/find/${id}`);
                setUser(res.data);
            }catch(err){
                console.log(err.response.data)
            }
        }
        getUser()
    },[id]);


    //handling submit function
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "facebook");
        try{
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dmvmzwqkw/image/upload", data);
            // img: uploadRes.data.secure_url
            const userInfo = { isAdmin, img:uploadRes.data.secure_url }
            
            const res = await userRequest.put(`/user/${id}`, userInfo);
            console.log(res.data)

        }catch(err){
            console.log(err);
        }
    }


  return (
    <div className="user">
        <div className="updatetop">
            <h3 className="updateTitle">Edit user </h3>
              <button className=""><NavLink to="/newuser" className="updatebtn">Create</NavLink></button>
        </div>
        <div className="updatetbottom">
            <div className="updateBottomLeft updateItem">
                <div className="userProfile">
                    <img src={user?.img} alt="" className="userProfileImg" />
                    <div className="userProfileDes">
                        <h2 className="userprofileName">{user.username}</h2>
                        <span className="userprofileTitle">{user.email}</span>
                    </div>
                </div>
                <div className="userDetails">                
                      <p className="useritem"><i class="fa-sharp fa-solid fa-briefcase"></i>{user.createdAt}</p>
                </div>
            </div>
              <div className="updateBottomright updateItem">
                  <form action="" className="userForm">
                    <h1>update profile</h1>
                      <h2 className="userprofileName"> upload image</h2>
                    <label htmlFor="file">
                       
                        <input type="file" name="" id="file" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])} />
                          <img src={file ? URL.createObjectURL(file):`${user?.img}`} alt="" className="userImg" />
                    </label>
                    <label htmlFor="isAdmin">IS ADMIN:</label>
                      <select name="isAdmin" id="isAdmin" onChange={(e) => setIsAdmin(e.target.value)}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                      </select>
                        <button className="updatebtn" onClick={handleSubmit}>Update </button>
                  </form>
              </div>
        </div>
    </div>
  )
}

export default User