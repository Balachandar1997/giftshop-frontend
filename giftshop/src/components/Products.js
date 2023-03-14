import React, { useEffect, useState } from 'react'
import './Products.css'
import ProductData from './ProductData'
import { useStateValue } from './Stateprovider';
import axios from 'axios'

const Products = () => {
    const[{basket,user},dispatch]=useStateValue();
    const[product,setProduct]=useState([])

    useEffect(() => {
        const fetchData = async () => {
          const req = await axios.get("http://localhost:8000/flora/gifts");
          setProduct(req.data);
          console.log(req.data)
        };
        fetchData();
      },[]);
  return (
    <div className='home'>
         <h3>Hello {user?.email}</h3>
    <div className='home_container'>
        <img className="amazon_banner_image01" src="giftbanner1.jpg" alt="banner01" height="300px" width="100%"/>
    </div>
    <div className="home__row">
        {product.map((pro,index)=><ProductData key={index} id={pro.id} title={pro.title} image={pro.image} price={pro.price} rating={pro.rating} />)}
       
        
     </div> 
 </div>
  )
}

export default Products