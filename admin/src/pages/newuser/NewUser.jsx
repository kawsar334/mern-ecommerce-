import { useState } from "react"
import "./newuser.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewUser = () => {

  const navigate = useNavigate();
  const [inputs, setInputs] = useState({});
  console.log(inputs)
  const handleInputs = (e)=>{
    setInputs((prev)=>{
      return {
        ...prev, [e.target.name]:e.target.value
      }
    })
  }
  
  //handling registration function
  const handleRegister = async(e)=>{
    e.preventDefault();
    try{
      const res = await axios.post("/auth/register", inputs);
      console.log(res.data)
      if(res.status === 200){
        navigate("/login")
      }else{
        navigate("/newuser")
      }

    }catch(err){
      console.log(err.response.data);
    }

  }



  return (
    <div className="newuser">

        <form action="" className="newUserForm" onSubmit={handleRegister}>
        <h3 className="newUserTitle">Create a New User </h3>
                <input type="text" name="username" id="username" placeholder="Username" className="neuserInput" onChange={handleInputs} />
                <input type="email" name="email" id="email" placeholder="example@gmail.com" className="neuserInput" onChange={handleInputs}
                 />
          <input type="password" name="password" id="password" onChange={handleInputs} placeholder="Password" className="neuserInput" />
          <select name="isAdmin" id="isAdmin" onChange={handleInputs}>
            <option disabled selected> IS ADMIN </option>
            <option value="false">No</option>
            <option value="true">Yes</option>

          </select>

          <button className="newsubmitBtn" >submit</button>
           
            
        </form>
    </div>
  )
}

export default NewUser