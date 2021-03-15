//This Products component (Class) used to get and load product details (image,rate,title....) on screen
import React, { Component } from 'react'
import formatCurrency from '../util'

export default class Products extends Component {
    render() {
        return (
            /* This  {this.props.Products} line used to get list of products form parents Component*/
            /* using .map for each products going to convert to key value pairs/ set the key value to product_id */
            <div>
               <ul className="products">
                {this.props.products.map(product => (
                <li key = {product._id}>
                    <div className="product">
                        <a href ={"#" + product.product_id}>
                            <img src = {product.image} alt= {product.title}></img>
                            <p>
                                {product.title}
                            </p>
                        </a>
                        <div className ="product-price">
                            <div>{formatCurrency ( product.price)}</div>
                            <button className="button primary">Add to Cart</button>
                        </div>
                    </div>
                </li>
                ))}
                </ul> 
            </div>
        )
    }
}
