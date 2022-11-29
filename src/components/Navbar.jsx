import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../components/Styles/navbar.modules.css'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

export const Navbar = () => {

  let navigate = useNavigate();

const logoClick =()=>{
  navigate("/", { replace: true });
}

const [cartCount,setCartCount] = useState(0)


React.useEffect(()=>{
  fetch(`http://localhost:8080/cart`)
  .then( r=>{
      return r.json()
  })
  .then(d=>{
      
    setCartCount(d.length)
      
  })
},[])
// console.log(cartCount)

  return (
    <div className= "navbar">
      <span className='logo' onClick={logoClick}>Alpha Fashion</span>
      <div className='subnav'>
     
    
      <Link className='link' to={"/"}>Home</Link>
     
      <Link className='link' to={"/about"}>About</Link>
      <Link className='link' to={"/faq"}>FAQ</Link>
      <Link className='link' to={"/contact"}>Contact US</Link>
      </div>
      <div>
        <p className='cart'><Link className='link' to={"/cart"}><i class="fa-solid fa-cart-shopping"></i>: {cartCount}</Link></p>
      </div>
      
    </div>
  )
}
