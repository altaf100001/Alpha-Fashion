import React from 'react'
import styles from '../components/Styles/catogries.modules.css'
import { Link } from 'react-router-dom'

import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Catogries = () => {
  let navigate = useNavigate();

  const handleclick =()=>{
    navigate("/womens", { replace: true });
  }

  const handleclick2 =()=>{
    navigate("/mens", { replace: true });
  }

  return (
    <div className='container'>
      <div className="main">

      </div>

      <h1>Categories</h1>

      <div className="subcon">
    
    
        <div className="women conbox"  onClick={handleclick}>
         <Link className='link' to={"/womens"} > <h1>Women</h1></Link>
        </div>
        
        <div className="men conbox" onClick={handleclick2} >
        <Link className='link' to={"/mens"} > <h1>Men</h1></Link>
        
        </div>

      </div>
    </div>
  )
}
