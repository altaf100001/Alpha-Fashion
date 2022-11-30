import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import styles from '../components/Styles/mens.modules.css'


export const Mens = () => {

  const [items , setItem] = useState([])

 React.useEffect(() => {
  fetch("https://apimockeradnanchicken.onrender.com/reactEcommerce")
  .then( r=>{
    return r.json()
  }).then(d =>  setItem(d.mens))
   
 
   return () => {
     
   }
 }, [])


 
 

  return (
    <div>
      <h1>Mens Products</h1>

      <div className='productsdiv'>
        {
          items.map(e =>{
            return (
              <Link className='menlink' to={`/mens/${e.id}`}>
    
               <div className='productdiv'>
                <img src={e.image} alt="" />
                <h3>{e.title}</h3>
                <p style={{fontSize:"20px",fontWeight:"500"}} >Price : {e.price}</p>
              
                
                
               

               </div>

                
                </Link>
            )
          })
        }
      </div>

    </div>
  )
}
