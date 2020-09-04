import React from "react"
import { LocationList } from "./components/location/LocationList"
import { LocationProvider } from "./components/location/LocationProvider"
import { ProductProvider } from "./components/product/ProductProvider";
import { ProductTypeProvider } from "./components/product/ProductTypeProvider";
import { ProductList } from "./components/product/ProductList";
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>When your morning coffee just isn't enough.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Candy</h2>
        <ProductProvider>
            <ProductTypeProvider>
                <ProductList />
            </ProductTypeProvider>
        </ProductProvider>
    </>
)