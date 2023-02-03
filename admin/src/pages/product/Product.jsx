import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation,useNavigate } from "react-router-dom"
import { publicRequest, userRequest } from "../../api/requestMethods";
import "./product.css"
import axios from "axios";
const Product = () => {
    const navigate = useNavigate();
    const id = useLocation().pathname.split("/")[2];
    const [product ,setProduct] =useState({});
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState(0);




    useEffect(()=>{
        const getProduct = async()=>{
            try{
                const res =await publicRequest.get(`/product/find/${id}`);
                setProduct(res.data)
            }catch(err){
                console.log(err);
            }
        }
        getProduct();
    },[id])

const handleUpdate = async(e)=>{
    e.preventDefault();
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "facebook");
    try {
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dmvmzwqkw/image/upload", data);
        const newProduct = { title, desc, price, img:uploadRes.data.secure_url, price }
        const res = await userRequest.put(`/product/${id}`, newProduct);
        console.log(res.data)
        if(res.status=== 200){
            navigate(`/`);
        }

    }catch(err){
        console.log(err);
    }

}

  return (
    <div className="product">
        <div className="productWrapper">
            <div className="productLeft">
                <h1  className="text-capitalize">{product.title}</h1>
                  <img src={product?.img} alt="" className="productdetailsImg" />
                  <p><b>colors:</b>{product.color?.map((s) => (
                      <span className="text-uppercase">{s + ","}</span>
                  ))}</p>
                  <p><b>Sizes:</b>{product.size?.map((s)=>(
                    <span className="text-uppercase">{s +","}</span>
                  ))}</p>
                  <p><b>price:</b>${product.price}</p>
                <div className="productDesc">{product.desc}.</div>
            </div>
              <div className="productRight">
                <form action="" className="productForm">
                      <h1>Edit product</h1>

                    <input type="text" placeholder="title" onChange={(e)=>setTitle(e.target.value)} />
                      <input type="text" placeholder="desc" onChange={(e)=>setDesc(e.target.value)} />
                      <input type="text" placeholder="price" onChange={(e)=>setPrice(e.target.value)} />
                      <label htmlFor="file" className="bg-secondary updateFile"> Upload Image</label>
                      <input type="file" className="d-none" id="file"  onChange={(e)=>setFile(e.target.files[0])}/>
                      <button className="btn btn-primary" onClick={handleUpdate}>update</button>

                </form>
              </div>

        </div>
    </div>
  )
}

export default Product