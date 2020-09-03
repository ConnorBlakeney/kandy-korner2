import React from "react"
import { LocationList } from "./components/location/LocationList"
import { LocationProvider } from "./components/location/LocationProvider"
import "./KandyKorner.css"

export const KandyKorner = () => (
    <>
        <h2>Kandy Korner</h2>
        <small>When your morning coffee just isn't enough.</small>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>
    </>
)