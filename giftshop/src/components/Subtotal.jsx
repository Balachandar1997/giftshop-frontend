import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './Stateprovider'
import { getBasketTotal } from './Reducer'
import { useNavigate } from 'react-router-dom'

const Subtotal = () => {
   const[{basket},dispatch]=useStateValue()
   const navigate=useNavigate()
 console.log(dispatch)
  return (
    <div className='subtotal'>
      <CurrencyFormat 
      renderText={(value)=>(
        <>
         <p>
          Subtotal ({basket.length} items):<strong>{value}</strong>
         </p>
         <small className='subtotal_gift'>
          <input type="checkbox" /> This order contains a gift
         </small>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      />
      <button onClick={e=>navigate('/payment')}>proceed to checkout</button>
        
    </div>
  )
}

export default Subtotal