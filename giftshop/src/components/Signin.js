import React, { useState } from 'react'
import "./Signin.css"
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'



const Signin = () => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const navigate=useNavigate()

  const signIn=e=>{
    e.preventDefault()
    auth.signInWithEmailAndPassword(email,password)
         .then((auth)=>{
            navigate('/')
         })
         .catch(err=>alert(err.message))
  }

  const register=e=>{
       e.preventDefault()

       auth.createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
      console.log(auth)
      if(auth){
        navigate('/')
      }
    })
    .catch(error=>alert(error.message))
  }
 

  return (
    <div className='Login'>
      <Link to= "/">
        <h1>Flora</h1>
      </Link>
    <div className='login_container'>
       <h1>Signin</h1>
       <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e=>setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
          <button type="submit" onClick={signIn} className='login_signinbutton' >Sign In</button>
       </form>
       <p>
        Or<br/>
        If you dont Have an account create your account now
       </p>
       <button  onClick={register} className='login_register_button'>
        Create your Account
       </button>
    </div>
      
    </div>
  )
}

export default Signin