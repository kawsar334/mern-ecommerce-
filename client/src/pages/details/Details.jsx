import axios from "axios";
import { useEffect , useState} from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Annoucement from "../../components/annoucement/Annoucement";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Newsletter from "../../components/newsletter/Newsletter";
import { addProduct } from "../../redux/cartRedux";
import { publicRequest } from "../../reqMethods/RequestMethods";
import "./details.scss";

const Details = () => {
  const dispatch = useDispatch();
  const id = useLocation().pathname.split("/")[2] ;
  const [product, setProudct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null)
console.log(size)
  //GET  SINGLE PRODUCT  FROM API // BACKEND 
  useEffect(()=>{
    const getDetails = async()=>{
        try{
          const res = await publicRequest(`/product/find/${id}`)
          setProudct(res.data)

        }catch(err){
          console.log(err.response);
        }
    }
    getDetails(); 

  },[id]);

  //HANDLING DECREMENT FUNCTION
  const handleDec = (e)=>{
    e.preventDefault();
    if(quantity >1){
      setQuantity(quantity -1);
    }
 
  }

  // updating cart using onclick function
  const handleClick = (e)=>{
    e.preventDefault();
    dispatch(addProduct({...product, quantity, price:product.price *quantity}));
  };

  return (
    <div className="details">
      <Annoucement />
      <Navbar />
<div className="details_container">
  <div className="detailsLeft">
      <img src={product.img} alt="Loading..."  className="detailsImg"/>
  </div>
  <div className="detailsRight">
    <div className="detiailsInfo">
      <h2 className="title">{product.title}</h2>
      <p>{product.desc}.</p>
      <div className="colors">
        <h3>colors:</h3>
        {product.color?.map((c)=>(
          <span className="color" key={c} style={{background:`${c}`}} onClick={()=>setColor(c)}></span>
        ))}    
      </div>
      <div className="sizes">
              <h3>sizes:</h3>
              {product.size?.map((s)=>(
                <span key={s} onClick={()=>setSize(s)}>{s}</span>
              ))}  
      </div>
       
       <div className="counterDiv">
             <span onClick={()=>setQuantity(quantity+1)}> +</span>
              <span>{quantity}</span>
              <span onClick={handleDec}>-</span>

       </div>
       <button onClick={handleClick}>Add to cart</button>

    </div>
  </div>
  

</div>

      {/* <Newsletter /> */}
      <Footer />
    </div>
  )
}

export default Details