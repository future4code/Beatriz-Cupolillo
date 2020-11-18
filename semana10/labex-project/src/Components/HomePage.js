import React from "react";
import { useHistory } from "react-router-dom";

export default function HomePage(){
    const history = useHistory();

    const goToHome = () => {
        history.push("/")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }

    const goToTripsPage = () => {
        history.push("/listTrips")
    }

    return (

        <div>
            <h3>LabeX - Home</h3>
            <button onClick={goToHome}>Home</button>
            <button onClick={goToLoginPage}>Login</button>
            <button onClick={goToTripsPage}>Trips</button>
        </div>
    )
}