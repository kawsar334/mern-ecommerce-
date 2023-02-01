import StripeCheckout from 'react-stripe-checkout';
const KEY = "pk_test_51KGo0XHG7qACO4ZleQqv0XtS5T9ryIsssF6WRliEaQZOJ0sVZm5TSes4uQVS9bSuAKyjeysqnUD8DFgNDGxJF8oC002HOxI3YC"

const pay = () => {
    const onToken  = (token)=>{
        console.log(token);
    }
  return (
    <div>

        <StripeCheckout
              name=" firoz shoping ." // the pop-in header title
              description="Big Data Stuff" // the pop-in header subtitle
              image="https://images.pexels.com/photos/11124447/pexels-photo-11124447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" // the pop-in header image (default none)
              ComponentClass="div"
              panelLabel="Give Money" // prepended to the amount in the bottom pay button
              amount={1000000} // cents
              currency="USD"
              billingAddress
              token={onToken}
              stripeKey={KEY}
        >
        <button className="payButton">Pay Now </button>
        </StripeCheckout>
    </div>
  )
}

export default pay