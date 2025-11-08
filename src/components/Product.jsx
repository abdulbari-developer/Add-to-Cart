import React from 'react'
import product_Detail from './ProductDetail.jsx'
import './style.css'

const Product = ({ AddToCart }) => {
    return (
        <div className='product-container'>
            <div className="main-product">
                {
                    product_Detail.map((currElem) => {

                        return (

                            <div className="box" key={currElem.id}>
                                <div className="img-box">
                                    <img src={currElem.img} alt="" />
                                </div>
                                <div className="details">
                                    <h4>{currElem.category}</h4>
                                    <div className="info">
                                        <h2> {currElem.title}</h2>
                                        <p>${currElem.price}</p>
                                    </div>
                                    <button className='add_to_cart' onClick={() => AddToCart(currElem)}>Add to cart</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Product
