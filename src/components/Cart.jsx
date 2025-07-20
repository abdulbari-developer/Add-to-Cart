import React from 'react'
import './style.css'
import { Link } from 'react-router-dom';

const Cart = ({ cartItem, setcartItem }) => {
  function inc(product) {
    const excit = cartItem.find((x) => {
      return x.id === product.id
    })
    setcartItem(cartItem.map((item) => {
      return item.id === product.id ? { ...excit, quantity: excit.quantity + 1 } : item

    }))
  }
  function dec(product) {
    const excit = cartItem.find((x) => {
      return x.id === product.id
    })
    setcartItem(cartItem.map((item) => {
      return item.id === product.id ? { ...excit, quantity: excit.quantity - 1 } : item

    }))
  }
  function removeCart(product) {
    const excit = cartItem.find((x) => x.id === product.id)
    if (excit.quantity > 0) {
      setcartItem(cartItem.filter((x) => x.id !== product.id))
    }
  }
  const totalPrice = cartItem.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <>
      {
        cartItem.length === 0 && <>
          <h2 className='empty-cart'>Cart is Empty Please select a product</h2>
          <Link to="/">
            <button className='cart-shop'>Shop now</button>
          </Link>
        </>
      }

      <div className="cart-container">
        <div className="cart-product">
          {
            cartItem.map((item) => {
              return (
                <div className="cart_box" key={item.id}>
                  <div className="cart-product-container">
                    <div className="cart-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="cart-item-detail">
                      <h2>{item.title}</h2>
                      <h3>Price: ${item.price}</h3>
                      <button className="quantity-dec" onClick={() => dec(item)}>-</button>
                      <input type="text" value={item.quantity} />
                      <button className="quantity-inc" onClick={() => inc(item)}>+</button>
                      <button className='remove_cart' onClick={() => removeCart(item)}>X</button>
                      <h3>Sub Total:{item.quantity * item.price}</h3>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        {cartItem.length > 0 && <>
          <p className='cart-total'>Total:${totalPrice}</p>
          <button className='checkout'>Check Out</button>
        </>}
      </div>

    </>
  )
}

export default Cart
