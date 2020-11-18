import React from "react";
import { useHistory } from "react-router-dom";

export default function ListTripsPage(){
    const history = useHistory();

    const goToHome = () => {
        history.push("/")
    }

    const goToLoginPage = () => {
        history.push("/login")
    }


    return (

        <div>
            <h3>LabeX - Trips </h3>
            <button onClick={goToHome}>Home</button>
            <button onClick={goToLoginPage}>Login</button>
        </div>
    )
}