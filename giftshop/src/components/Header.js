import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useStateValue } from './Stateprovider';
import { auth } from './firebase';


const Header = () => {
  const[{basket,user},dispatch]=useStateValue();
  
  

  const handleAuthentication=()=>{
     if(user){
      auth.signOut()

     }
  }
  return (
    <div className='header'>
       <Link to="/">
          <div className='header_left'>
             <h1>Flora</h1>
          </div>
        </Link>
        
        <div className='header_right'>
            <div>
                 <label htmlFor='search'>Search Product&nbsp;</label>
                <input type='text' placeholder='search products' ></input>
                
            </div>
            <Link to={!user && '/signin'}>
             <div onClick={handleAuthentication}>
                <h2>{user?'Sign Out' : 'Sign In'}</h2>
             </div>
           </Link>
           
           <Link to="/about">
             <div>
                <h2>About Us</h2>
             </div>
           </Link>
           <Link to="/cart">
              <div>
                 <h2>Cart:<span className= 'header_optiion_linetwo header_option_basketcount'>{basket?.length}</span></h2>
              </div>
           </Link>
        </div>
        
        
    </div>
  )
}

export default Header