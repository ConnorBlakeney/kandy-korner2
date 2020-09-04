import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { LocationContext } from "../location/LocationProvider";
import "./Employee.css"
import { Employee } from "./Employee";

export const EmployeeList = () => {
    // This state changes when `getemployees()` is invoked below
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    /*
        What's the effect this is reponding to? Component was
        "mounted" to the DOM. React renders blank HTML first,
        then gets the data, then re-renders.
    */
    useEffect(() => {
        console.log("ProductList: Initial render before data")
        getEmployees().then(getLocations)
    }, [])

    /*
        This effect is solely for learning purposes. The effect
        it is responding to is that the product state changed.
    */

    return (
        <div className="employees">
        {
                employees.map(employee => {

                    const location = locations.find(location => employee.locationId === location.id) || 1
                    return <Employee key="employee.id" employee={employee} location={location} />
                })
            }
        </div>
    )
}