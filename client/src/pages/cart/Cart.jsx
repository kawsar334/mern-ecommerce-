import "./cart.scss"
import Annoucement from "../../components/annoucement/Annoucement"
import Navbar from "../../components/navbar/Navbar"
import Newsletter from "../../components/newsletter/Newsletter"
import Footer from "../../components/footer/Footer"
import { NavLink } from "react-router-dom"
import StripeCheckout from 'react-stripe-checkout';
import { useState } from "react"
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux"
import { STRIPE_SECRETE } from "../../STRIPE"
const key=STRIPE_SECRETE
const Cart = () => {
  const { products, total, quantity } = useSelector((state) => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  
const onToken = (token)=>{
    setStripeToken(token);
}

useEffect(()=>{
const makeRequest = async()=>{
  try{
    const res = await axios.post("http://localhost:4004/api/stripe/payment",{
      tokenId:stripeToken.id,
      amount:2000,
    });
    console.log(res.data)
  }catch(err){
    console.log(err.response);
  }
};
   stripeToken&& makeRequest();
},[stripeToken])


  return (
    <div>
      <Annoucement />
      <Navbar />
     { products.length<1 ? <h1 style={{color:"crimson", textAlign:"center"}}>Your cart is empty !</h1>: <div className="cartContainer">
        <div className="cartTop">
          <NavLink  to="/">
          <button className="continuebtn">CONTINUE SHOPING</button>
          </NavLink>
          <button className="checkoutbtn">CHECKOUT</button>
        </div>
        <div className="cartBottom">
          
          <div className="cartleft">
         
            {/*  */}
        {products.map((product)=>(   <div className="cartLeftItem">
                <div className="cartImgContainer">
                <img src={product?.img} alt="Loading..." />
              </div>
              <div className="cartdesc">
                <p><b>Product:</b> {product.title}</p>
                <p><b>ID:</b> {product._id}</p>
                <p><b>color:</b><span className="cartcolor">{`${product?.color +","}`}</span></p>
                <p><b>Size:</b> {product?.size}</p>
              </div>
              <div className="cartCounter">
                <p><span>+</span> <span>01</span> <span>-</span></p>
                <h4>${product.price}</h4>
              </div>
        </div>))}
            {/*  */}
          </div>
          <div className="cartright">
            <h3>Order summery </h3>
            <p><span className="bold">Subtotal:</span> <span>$800</span></p>
            <p><span className="bold">Subtotal:</span> <span>$800</span></p>
            <p><span className="bold">Subtotal:</span> <span>$800</span></p>
            <div className="total"><h4>Total: <span>${total}</span></h4></div>
            <StripeCheckout
              token={onToken}
              name="Three Comma Co."
              description="Big Data Stuff" // the pop-in header subtitle
              image="https://www.vidhub.co/assets/logos/vidhub-icon-2e5c629f64ced5598a56387d4e3d0c7c.png" // the pop-in header image (default none)
              ComponentClass="div"
              amount={1000000} // cents
              currency="USD"
              stripeKey={key}
              shippingAddress
              billingAddress={false}
            >
            <button>Checkout Now </button>
            </StripeCheckout>
          </div>
        </div>
      </div>}
      <Newsletter />
      <Footer />
    </div>
  )
}

export default Cart