import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import { ProductProvider } from "./product/ProductProvider";
import { ProductTypeProvider } from "./product/ProductTypeProvider";
import { ProductList } from "./product/ProductList";
import { EmployeeProvider } from "./employee/EmployeeProvider";
import { EmployeeList } from "./employee/EmployeeList";
import "./KandyKorner.css"

export const ApplicationViews = (props) => {
    return (
    <>
        <h2>Kandy Korner</h2>
        <small>When your morning coffee just isn't enough.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <Route exact path="/">
                <LocationList />
            </Route>
        </LocationProvider>

        <h2>Candy</h2>
        <ProductProvider>
            <ProductTypeProvider>
                <Route path="/products">
                    <ProductList />
                </Route>
            </ProductTypeProvider>
        </ProductProvider>

        <h2>Employees</h2>
        <EmployeeProvider>
            <LocationProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>
            </LocationProvider>
        </EmployeeProvider>
    </>
)
}