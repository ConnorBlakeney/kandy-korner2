import React, { useContext, useEffect } from "react"
import { ProductContext } from "./ProductProvider"
import { ProductTypeContext } from "./ProductTypeProvider";
import "./Product.css"
import { Product } from "./Product";

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

                    const productType = productTypes.find(productType => product.productTypeId === productType.id) || 1
                    return <Product key="product.id" product={product} productType={productType}/>
                })
            }
        </div>
    )
}