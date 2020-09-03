import React from "react"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider"
import "./KandyKorner.css"

export const Kennel = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>When your morning coffee just isn't enough.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)