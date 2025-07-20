import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Product from './product'
import Cart from './Cart'

const Raut = ({AddToCart,cartItem,setcartItem}) => {
  return (
    <>
     <Routes>
        <Route path='/' element={<Product AddToCart={AddToCart}/>}/>
        <Route path='/cart' element={<Cart AddToCart={AddToCart} cartItem={cartItem} setcartItem={setcartItem}/>}/>
     </Routes> 
    </>
  )
}

export default Raut
