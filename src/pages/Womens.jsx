import React from 'react'
import {Link} from 'react-router-dom'

export const Womens = () => {
  const [items , setItem] = React.useState([])

  React.useEffect(() => {
   fetch("https://apimockeradnanchicken.onrender.com/reactEcommerce")
   .then( r=>{
     return r.json()
   }).then(d => 
    setItem(d.womens)
   
    )
   
   
    
  
  }, [])
  
 
   return (
     <div>
       <h1>Womens Products</h1>
 
       <div className={'productsdiv'}>
         {
           items.map(e =>{
             return (
               <Link className={'menlink' } to={`/womens/${e.id}`}>
     
                <div className={'productdiv'}>
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
