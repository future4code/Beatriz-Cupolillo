import React from "react";
import { useHistory } from "react-router-dom";
import NavBar from "./NavBar"

export default function HomePage() {
    const history = useHistory();

    const goToTripsPage = () => {
        history.push("/listTrips")
    }

    return (
        <div>
            <NavBar />
            <div>
                <h4>As viagens que você sempre sonhou!</h4>
                <button onClick={goToTripsPage}>Verificar viagens disponíveis</button>
            </div>
        </div>
    )
}
