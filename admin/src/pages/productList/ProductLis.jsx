import { useState } from "react"
import { useEffect } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { publicRequest, userRequest } from "../../api/requestMethods"
import "./productlist.css"

const ProductLis = () => {
const [products, setProducts] = useState([]);
const [error, setError] = useState("");
const [success, setSuccess] = useState('')
    useEffect(()=>{
        const getProducts= async()=>{
            try{
                const res = await publicRequest.get("/product/");
                setProducts(res.data)
                

            }catch(err){
                console.log(err)
            }
        }
        getProducts()

    },[]);

    //handling delete function
    const handleDelete=async(id)=>{
        try{
            const res = await userRequest.delete(`/product/${id}`);
            setSuccess(res.data);


        }catch(err){
            setError(err.response.data);
        }
    }
  return (
    <div className="productlist">
          <button><NavLink to="/newproduct" className="addNewbtn btn btn-primary m-2 ">Add New  product</NavLink></button>
          {error && <h1 className="text-danger text-capitalize" >{error}</h1>}
          {success && <h1 className="text-primary text-capitalize text-center" >{success}</h1> }
        <h3>product list</h3>
          <table class="table table-light border text-center ">
              <thead>
                  <tr >
                      <th scope="col" className="text-center">Id</th>
                      <th scope="col" className="text-center">name</th>
                      <th scope="col" className="text-center">price</th>
                      <th scope="col" className="text-center" colSpan={2}>action</th>
                  </tr>
              </thead>
              <tbody>
                  {products.map((product)=>(
                      <tr key={product._id}>
                      <th scope="row" className="text-center">{product._id}</th>
                      <td><img src={product.img} alt="" className="productImg" /> <span>{product.title}</span></td>
                      <td className="userTrasaction">${product.price}</td>
                      <td><Link to={`/product/${product._id}`} className="btn btn-primary mx-1"><i class="fa-regular fa-pen-to-square"></i></Link>
                          <button className="btn btn-danger"><i class="fa-solid fa-trash" onClick={()=>handleDelete(product._id)}></i></button>
                      </td>
                  </tr>
                  ))}
              </tbody>
          </table>
    </div>
  )
}

export default ProductLis