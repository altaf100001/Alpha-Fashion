import React from 'react'
import {Link} from 'react-router-dom'

export const Womens = () => {
  const [items , setItem] = React.useState([])

  React.useEffect(() => {
   fetch("http://localhost:8080/womens")
   .then( r=>{
     return r.json()
   }).then(d => setItem([...items,...d]))
    
  
    return () => {
      
    }
  }, [])
  
 
   return (
     <div>
       <h1>Womens Products</h1>
 
       <div className='productsdiv'>
         {
           items.map(e =>{
             return (
               <Link className='menlink' to={`/womens/${e.id}`}>
     
                <div className='productdiv'>
                 <img src={e.image} alt="" />
                 <h3>{e.title}</h3>
                 <p>Price{e.price}</p>
                 <p>color{e.colors}</p>
 
                </div>
 
                 
                 </Link>
             )
           })
         }
       </div>
 
     </div>
   )
}
