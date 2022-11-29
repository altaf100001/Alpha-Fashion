import React from 'react'
import { useState } from 'react'

export const Cart = () => {

const [cart,setCartdata] = useState([])

React.useEffect(()=>{
    fetch(`http://localhost:8080/cart`)
    .then( r=>{
        return r.json()
    })
    .then(d=>{
        
        setCartdata([...cart,...d])
        
    })
  },[])
  

  return (
    <div>
        <h1>Cart </h1>
        <div className='productsdiv'>
        {
          cart.map(e =>{
            return (
              
    
               <div className='productdiv'>
                <img src={e.image} alt="" />
                <h3>{e.title}</h3>
                <p>Price{e.price}</p>
              
                <span>color{e.colors}</span>
                
               

               </div>

                
                
            )
          })
        }
      </div>
    </div>
  )
}
