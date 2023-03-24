import { useState } from "react";
import { useEffect } from "react";
import { NavLink, useLocation,useNavigate } from "react-router-dom"
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
                const res =await axios.get(`/product/find/${id}`);
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
        const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dmvmzwqkw/image/upload", data,);
        const newProduct = { title, desc, price, img:uploadRes.data.secure_url, price }
      const res = await axios.put(`/product/${id}`, newProduct, {
        headers: { token: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MGM5MzAyMWY3M2MxNmJjNGNhZWQxNCIsInVzZXIiOnsiX2lkIjoiNjQwYzkzMDIxZjczYzE2YmM0Y2FlZDE0IiwidXNlcm5hbWUiOiJhYmFkc2ZkIiwiZW1haWwiOiJhYmRAZ21haWwuY29tIiwicGFzc3dvcmQiOiJVMkZzZEdWa1gxOWVEYnhNSHUyYVJPMjRJQ0NnUUNMWXNENjAySlhpbkE0PSIsInBob25lIjoiMjkyODgzODM4MzgiLCJpbWciOiIiLCJpc0FkbWluIjp0cnVlLCJjcmVhdGVkQXQiOiIyMDIzLTAzLTExVDE0OjQxOjA2LjE5MloiLCJ1cGRhdGVkQXQiOiIyMDIzLTAzLTExVDE0OjQxOjA2LjE5MloiLCJfX3YiOjB9LCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2Nzg1NTMxODAsImV4cCI6MTY3ODgxMjM4MH0.EonNaUzH2Avp7SjchrYWQ203jA66dmHZr_LlM-odaRM` }
      });
       
        if(res.status=== 200){
            navigate(`/`);
        }else{
       
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