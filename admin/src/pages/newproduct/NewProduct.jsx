import { useState } from "react"
import "./newproduct.css";
import axios from "axios";
import { userRequest } from "../../api/requestMethods";
import { useNavigate } from "react-router-dom";

const NewProduct = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [inputs, setInputs] =useState({});
    const [color, setColor]=useState("");
    const [size, setSize] = useState("");
    const [categories,setCategories] =useState("");
    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);



    //uploading product 
    const handleUploadProduct = async(e)=>{
        e.preventDefault();
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", "facebook");
        try{
            const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dmvmzwqkw/image/upload", data);
            const newProduct = { inputs, color, size, categories, desc, title, img: uploadRes.data.secure_url,price }
            const res = await userRequest.post(`/product/addProduct/`,newProduct);
           
            if(res.status===200){
                navigate(`/produclist`)
            }
        }catch(err){
            console.log(err);
        }
    }
  return (
      <div className="newproduct">
          <h3 className="newUserTitle">New Product </h3>
          <form action="" className="newUserForm">
              <div className="newUserFormLeft">
                  <label htmlFor="file" className="file">
                      <img src={ file? URL.createObjectURL(file):"https://images.pexels.com/photos/14341974/pexels-photo-14341974.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="Loading..." className="uploadImg" />

                      <i class="fa-solid fa-arrow-up"></i>Upload img </label>
                  <input type="file" name="file" id="file" style={{ display: "none" }} multiple onChange={(e)=>setFile(e.target.files[0])}  required/>
                  {/* <label htmlFor="name">product name</label> */}
                 
                  {/* <label htmlFor="title">title</label> */}
                  <input type="title" name="title" id="title" placeholder="Enter product Title" onChange={(e) => setTitle(e.target.value)} required
                  />
                  <input type="text" name="color" id="name" placeholder="Enter colors using comma " onChange={(e) => setColor(e.target.value.split(","))} required />
                  <input type="text" name="size" id="name" placeholder="Enter sizes using comma " onChange={(e) => setSize(e.target.value.split(","))} required />
                  {/* <label htmlFor="price">Price</label> */}
                  <input type="text" name="price" id="price" placeholder="$ Enter product Price." onChange={(e) => setPrice(e.target.value)}  required/>
                  {/* <label htmlFor="category">category</label> */}
                  <input type="categories" name="categories" id="categories" placeholder="Write categories using comma  " onChange={(e) => setCategories(e.target.value.split(","))} required />
                  {/* <label htmlFor="description"> description</label> */}
                  <input type="text" name="desc" id="description" placeholder="Enter product  description ." onChange={(e) => setDesc(e.target.value)} required />
                  <button className="newBtn" onClick={handleUploadProduct} >submit</button>
              </div>
             
          </form>
      </div>
  )
}

export default NewProduct