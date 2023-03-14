import React from 'react'
import Header from './Header'
import "./Cart.css"
import Subtotal from './Subtotal';
//import { getBasketTotal } from './Reducer';
import { useStateValue } from './Stateprovider';
import Footer from './Footer';
import CheckoutProduct from './CheckoutProduct';

const Checkout = () => {
  const[{basket,user},dispatch]=useStateValue()

  return (
    <div >
        <Header />
        <div className="checkout">
        <div className='checkout_left'>
          <img className="checkout_ad" src="banner2.jpg" alt="" width="100%"/>
        <div>
          <h3>Hello,{user?.email}</h3>
           <h2 className='checkout_title'>Your Shopping Basket</h2>
           {basket.map(item=>(
            <CheckoutProduct
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             rating={item.rating}
            />
           ))}
        </div>
        </div>
        <div className="checkout_right">

            <Subtotal />
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default Checkout