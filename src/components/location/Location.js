import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
    <section className="location">
        <h3><div className="location__name">{location}</div></h3>
            <address className="location__address">{location.address}</address>
    </section>
)