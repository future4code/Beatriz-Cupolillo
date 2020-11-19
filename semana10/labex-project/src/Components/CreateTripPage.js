import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar"

export default function CreateTripPage(){
    const history = useHistory();

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <div>
            <NavBar />
            <h3>LabeX - Create Trip</h3>
            <button onClick={goToLoginPage}>Logout</button>
        </div>
    )
}