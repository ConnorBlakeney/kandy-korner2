import React from "react"
import "./Location.css"

export const Location = ({ location }) => (
    <section key={location.id} className="location">
        <h3><div className="location__name">{location.name}</div></h3>
            <address className="location__address">{location.address}</address>
    </section>
)