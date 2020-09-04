import React from "react"
import "./Employee.css"

export const Employee = ({ employee, location }) => (
    <section className="employee">
        <h3><div className="employee__name">{employee.name}</div></h3>
            <address className="employee__location">Location: {location.name}</address>
            <div className="employee__manager">Manager: {employee.manager}</div>
            <div className="employee__fullTime">Full Time: {employee.fullTime}</div>
    </section>
)