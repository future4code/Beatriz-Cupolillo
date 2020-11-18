import React from "react";
import { useHistory } from "react-router-dom";

export default function LoginPage(){
    const history = useHistory();

    const goToHome = () => {
        history.push("/")
    }

    const createNewTrip = () => {
        history.push("/createTrip")
    }

    return (

        <div>
            <h3>LabeX - Login Adm</h3>
            <button onClick={goToHome}>Home</button>
            <button onClick={createNewTrip}>New Trip</button>
        </div>
    )
}