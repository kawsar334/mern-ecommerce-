import Annoucement from "../../components/annoucement/Annoucement"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import Newsletter from "../../components/newsletter/Newsletter"
import "./products.scss"
import Product from "../../components/products/Products"
import { useEffect, useState } from "react"
import axios from "axios"
import { useLocation } from "react-router-dom"

const Products = () => {

 
  const cat = useLocation().pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest")
  const handleChange = async(e)=>{
          const value = e.target.value;
          setFilters({
           ...filters,
            [e.target.name]:value
          })
  }
 
  return (
    <div className="products_container">

        <Annoucement />
        <Navbar />
      <h1 >Dresses</h1>
     <div className="product_wrapper">
      <div className="productLeft">
        <h2>Filter products:</h2>
          <select name="size" onChange={handleChange}>
          <option disabled selected>Size</option>
          <option value="xxl">xxl</option>
            <option value="xl">xl</option>
            <option value="l">L</option>
            <option value="m">M</option>
        </select>
        <select name="color" onChange={handleChange} >
            <option  disabled selected>color</option>
          <option value="red">red</option>
            <option value="green">green</option>
            <option value="blue">blue</option>
            <option value="black">black</option>
        </select>
      </div>
      <div className="productRight">
          <h2>Filter products:</h2>
          <select name="sort" onChange={(e)=>setSort(e.target.value)}>
            <option value="newest">New</option>
            <option value="des">price(desc)</option>
            <option value="asc">price(asc)</option>

          </select>
        </div>
     </div>
      <Product   cat={cat} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
        
    </div>
  )
}

export default Products