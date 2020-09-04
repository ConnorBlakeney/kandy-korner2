import React from "react"
import "./Product.css"

export const Product = ({ product, productType }) => (
    <section className="product">
        <h3><div className="product__name">{product.name}</div></h3>
            <address className="product__price">Price: {product.price}</address>
            <div className="productType__name">Candy Type: {productType.name}</div>
    </section>
)