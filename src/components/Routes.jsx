import React from 'react'
import { Routes,Route} from 'react-router-dom'
import {Home} from '../pages/Home'
import {Catogries} from '../pages/Catogries'
import {About} from '../pages/About'
import {FAQ} from '../pages/FAQ'
import { Contact } from '../pages/Contact'
import {Womens} from '../pages/Womens'
import {Mens} from '../pages/Mens'
import { ProductMen } from '../pages/ProductMen'
import { ProductWomen } from '../pages/ProductWomen'
import { Cart } from '../pages/Cart'

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        
        <Route path ='/' element={<Catogries/>}/>
        <Route path ='/about' element={<About/>}/>
        <Route path ='/faq' element={<FAQ/>}/>
        <Route path ='/contact' element={<Contact/>}/>
        <Route path='/womens' element={<Womens/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path ='/mens/:id' element={<ProductMen/>}/>
        <Route path ='/womens/:id' element={<ProductWomen/>}/>
        <Route path='/cart' element={<Cart/>}/>

      </Routes>

    </div>
  )
}
