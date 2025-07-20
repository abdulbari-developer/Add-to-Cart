import React from 'react'
import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from './components/navbar';
import Raut from './components/raut';
const App = () => {
  const [cartItem, setcartItem] = useState([])
  const AddToCart = (product) => {
    const excit = cartItem.find((x) => {
      return x.id === product.id;
    })
    if (excit) {
      alert("The Product is Already Added");
    }
    else {
      setcartItem([...cartItem, { ...product, quantity: 1 }])
    }
    console.log(setcartItem)
  }
  return (
    <Router>
      <Navbar />
      <Raut AddToCart={AddToCart} cartItem={cartItem} setcartItem={setcartItem} />
    </Router>
  )
}

export default App
