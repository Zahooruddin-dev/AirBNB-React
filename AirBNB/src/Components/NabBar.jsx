import React from "react"
import AirBNB from "./images/airbnb-logo.png"
export default function Navbar() {
    return (
        <nav>
            <img src={AirBNB}className="nav--logo" />
        </nav>
    )
}