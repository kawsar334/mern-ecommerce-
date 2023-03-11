
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { userRequest } from "../../api/requestMethods";

import "./userlist.css";

;



const UserList = () => {
const { currrentUser } = useSelector((state) => state.auth);
const [user, setUser] = useState([])

useEffect(()=>{
  const getUser = async()=>{
    try{
      const res =await userRequest(`/user?new=${true}`,{
        headers: { token:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGM5MzAyMWY3M2MxNmJjNGNhZWQxNCIsInVzZXIiOnsiX2lkIjoiNjQwYzkzMDIxZjczYzE2YmM0Y2FlZDE0IiwidXNlcm5hbWUiOiJhYmFkc2ZkIiwiZW1haWwiOiJhYmRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJVMkZzZEdWa1gxOWVEYnhNSHUyYVJPMjRJQ0NnUUNMWXNENjAySlhpbkE0PSIsInBob25lIjoiMjkyODgzODM4MzgiLCJpbWciOiIiLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTExVDE0OjQxOjA2LjE5MloiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTExVDE0OjQxOjA2LjE5MloiLCJfX3YiOjB9LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2Nzg1NTMxODAsImV4cCI6MTY3ODgxMjM4MH0.EonNaUzH2Avp7SjchrYWQ203jA66dmHZr_LlM-odaRM`}
      });
      setUser(res.data);
    }catch(err){
      console.log(err.response.data);
    }
  }
  getUser();
 },[]);


 const deleteUser = async(id)=>{
  if(window.confirm("are you sure delete this user")){
  try{
    const res = await axios.delete(`/user/${id}`,{
      headers:{token:`Bearer ${currrentUser?.token}`}
    });
  if(res.status ===200){
    window.location.reload();
  }
  }catch(err){
    console.log(err.response.data);
  }
  }
 }
  return (
    <div className="userList" >
      <button><NavLink to="/newuser" className="addNewbtn btn btn-primary my-2">Add New </NavLink></button>

      <table class="table table-light border ">
        <thead>
          <tr >
            <th scope="col" className="text-center">Id</th>
            <th scope="col" className="text-center">User</th>
            <th scope="col" className="text-center">Email</th>
            <th scope="col" className="text-center">IsAdmin</th>
            {/* <th scope="col" className="text-center">Transaction</th> */}
            <th scope="col" className="text-center" colSpan={2}>action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((u)=>(<tr key={u._id}>
            <th scope="row" className="text-center">{u._id.slice(0,7)+"..."}</th>
            <td ><img src={u.img} alt="" className="userIgm" /> <span>{u.username}</span></td>
            <td>{u.email}</td>
            <td>{u.isAdmin === true ?"Yes":"No"}</td>
            {/* <td className="userTrasaction">$120.00</td> */}
            <td><Link to={`/user/${u._id}`}  className="btn btn-primary mx-1"><i class="fa-regular fa-pen-to-square"></i></Link>
              <button className="btn btn-danger"><i class="fa-solid fa-trash" onClick={()=>deleteUser(u._id)}></i></button>
            </td>
          </tr>)) }
        </tbody>
      </table>
    </div>
  )
}

export default UserList