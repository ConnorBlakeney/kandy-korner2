import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "./ProductTypeProvider";
import "./Product.css"

export const ProductList = () => {
    // This state changes when `getProducts()` is invoked below
    const { products, getProducts } = useContext(ProductContext)
    const { productTypes, getProductTypes } = useContext(ProductTypeContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("ProductList: Initial render before data")
        getProducts().then(getProductTypes)
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the product state changed.
    */

    return (
        <div className="products">
        {
                products.map(product => {

                    const candyType = productTypes.find(productType => product.productTypeId === productType.id) || 1
                    return <section key={product.id} className="product">
                        <div><h3>{product.name}</h3></div>
                        <div>Price: ${product.price}</div>
                        <div>Candy Type: {candyType.name}</div>
                    </section>
                })
            }
        </div>
    )
}