import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation,useNavigate } from "react-router-dom"
import RequestMethods  from "../../api/RequestMethods";
import "./user.css";
import axios from "axios";
import Swal from 'sweetalert2/dist/sweetalert2.js'

const User = () => {
    const id = useLocation().pathname.split("/")[2];
    
    const [isAdmin , setIsAdmin] = useState(false);
    const [file, setFile] = useState(null);
    const navigate = useNavigate()

  const { data, err, loading } = RequestMethods(`/user/find/${id}`)

 

    //handling submit function
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "facebook");
        try{
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dmvmzwqkw/image/upload", data);
           
            const userInfo = { isAdmin, img:uploadRes.data.secure_url }
            
          const res = await axios.put(`/user/${id}`, userInfo, {
            headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGM5MzAyMWY3M2MxNmJjNGNhZWQxNCIsInVzZXIiOnsiX2lkIjoiNjQwYzkzMDIxZjczYzE2YmM0Y2FlZDE0IiwidXNlcm5hbWUiOiJhYmFkc2ZkIiwiZW1haWwiOiJhYmRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJVMkZzZEdWa1gxOWVEYnhNSHUyYVJPMjRJQ0NnUUNMWXNENjAySlhpbkE0PSIsInBob25lIjoiMjkyODgzODM4MzgiLCJpbWciOiIiLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTExVDE0OjQxOjA2LjE5MloiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTExVDE0OjQxOjA2LjE5MloiLCJfX3YiOjB9LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2Nzg1NTMxODAsImV4cCI6MTY3ODgxMjM4MH0.EonNaUzH2Avp7SjchrYWQ203jA66dmHZr_LlM-odaRM` }
          });
            console.log(res.data);
            if(res.status=== 200){
                navigate("/user")
            }

        }catch(err){

         
            console.log(err.response.data);
        }
    }
 
 
  return (
    <div className="user">
        <div className="updatetop">
            <h3 className="updateTitle">Edit user </h3>
              <button className=""><NavLink to="/newuser" className="updatebtn">Create</NavLink></button>
        </div>
        <div className="updatetbottom">
            
              <div className="updateBottomright updateItem">
                  <form action="" className="userForm">
                    <h1>update profile</h1>
                      <h2 className="userprofileName"> upload image</h2>
                    <label htmlFor="file">
                       
                        <input type="file" name="" id="file" style={{display:"none"}} onChange={(e)=>setFile(e.target.files[0])} />
              <img src={file ? URL.createObjectURL(file) : `${data?.img || "https://images.pexels.com/photos/4100769/pexels-photo-4100769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}`} alt="" className="userImg" />
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