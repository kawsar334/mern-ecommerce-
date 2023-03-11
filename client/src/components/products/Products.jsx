import "./products.scss"
import ProductList from "../productList/ProductList"

import { popularProducts } from "../../data"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"
import { useLocation } from "react-router-dom"


const Products = ({cat, filters, sort}) => {
const [products, setProducts] = useState([]);
const [filterProducts, setFilterProducts] = useState([]);
  // const cat = useLocation().pathname.split("/")[2];
  useEffect(()=>{
    const getProducts= async()=>{
      try{
        const res = cat ? await axios.get(`/product?category=${cat}`) : await axios.get(`/product/`);
        setProducts(res.data);
      }catch(err){
        console.log(err.response.data);
      }
    }
    getProducts();
  },[cat]);

  useEffect(()=>{
   cat && setFilterProducts(
  products.filter(item=>Object.entries(filters).every(([key, value])=>
      item[key].includes(value)
  ))
 )

  },[cat, filters,])
 

  // useEffect(()=>{

  //   if(sort==="newest"){
  //     setFilterProducts((prev)=>{
      
  //      [ ...prev].sort((a, b)=>a.createdAt - b.createdAt)
      
  //     })
  //   }else if(sort === "desc"){
  //       setFilterProducts((prev)=>
  //       [...prev].sort((a, b)=>b.price - a.price))
  //   }
  // },[sort]);
  return (
    <div className="products">
        { cat ? filterProducts.map((product)=>(

        <ProductList  product={product} key={product._id}/>
        )) : products.slice(0, 8).map((product)=>(
          <ProductList product={product} key={product._id} />

        ))}
    </div>
  )
}

export default Products