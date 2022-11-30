import React from 'react'
import { useState } from 'react'

export const Cart = () => {

const [cart,setCartdata] = useState([])

React.useEffect(()=>{
    fetch(`https://apimockeradnanchicken.onrender.com/reactEcommerce`)
    .then( r=>{
        return r.json()
    })
    .then(d=>{
        
        setCartdata(d.cart)
        console.log(d)
    })
  },[])
  

  return (
    <div>
        <h1>Cart </h1>
        <div className='productsdiv'>
        {
          cart?.map(e =>{
            return (
              
    
               <div className='productdiv'>
                <img src={e.image} alt="" />
                <h3>{e.title}</h3>
                <p>Price{e.price}</p>
              
               
                
               

               </div>

                
                
            )
          })
        }
      </div>
    </div>
  )
}
