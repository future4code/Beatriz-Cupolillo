import React from "react";
import { useHistory } from "react-router-dom";

export default function CreateTripPage(){
    const history = useHistory();

    const goToHome = () => {
        history.push("/")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    return (
        <div>
            <h3>LabeX - Create Trip</h3>
            <button onClick={goToHome}>Home</button>
            <button onClick={goToLoginPage}>Logout</button>
        </div>
    )
}