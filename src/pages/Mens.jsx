import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import styles from '../components/Styles/mens.modules.css'


export const Mens = () => {

  const [items , setItem] = useState([])

 React.useEffect(() => {
  fetch("http://localhost:8080/mens")
  .then( r=>{
    return r.json()
  }).then(d => setItem([...items,...d]))
   
 
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
                <p>Price{e.price}</p>
              
                <span>color{e.colors}</span>
                
               

               </div>

                
                </Link>
            )
          })
        }
      </div>

    </div>
  )
}
