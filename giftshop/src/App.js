
import './App.css';
import Home from './components/Home';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Signin from './components/Signin';
import Cart from './components/Cart';
import About from './components/About';
import { useStateValue } from './components/Stateprovider';
import { useEffect } from 'react';
import { auth } from './components/firebase';

function App() {
  const[{},dispatch]=useStateValue()

  useEffect(()=>{

    auth.onAuthStateChanged(authUser=>{
      console.log('The USER IS >>>',authUser)

      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })

      }else{
        dispatch({
          type:'SET_USER',
          user:null
        })

      }
  })

  },[])
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
