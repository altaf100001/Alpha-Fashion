import React from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
export const ProductWomen = () => {
    const {id} = useParams()
    const [item,setItem] = React.useState({})
   
    React.useEffect(()=>{
       fetch(`http://localhost:8080/womens/${id}`)
       .then( r=>{
           return r.json()
       })
       .then(d=>{
           setItem(d)
       })
    },[id])
   
    const handleCartClick =() =>{

   
    
        axios({
            method: 'post',
            url: ' http://localhost:8080/cart',
            data: 
             {...item,id:""}
            
          });
        
       }
    
   
     return (
      <div>
        <h1>Product</h1>
         <div style={{display:"flex",margin:"auto",width:"90%",alignItem:"center",justifyContent:"space-between"}}>
           <div><img style={{width:"600px"}} src={item.image} alt="" /></div>
           <div>
               <h1>Name : {item.title}</h1>
               <h2>Price : {item.price }</h2>
               <h2>Color : {item.colors }</h2>
               <button className='cartbtn' onClick={handleCartClick}>Add to Cart</button>
           </div>
       </div>
      </div>
     )
}
