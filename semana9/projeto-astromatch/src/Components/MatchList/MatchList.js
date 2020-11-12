import react, { useEffect, useState } from "react";
import axios from "axios";


export default function MatchList() {
    const [match, setMatch] = useState([])

    useEffect(() => {
        showMatch()
    }, [match])

    const showMatch = () => {
        axios.get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-cupolillo/person"
        )
            .then((res) => {
                setMatch(res.data.matches)
            }).catch((err) => {
                console.log(err.message)
            })
    }

    const onClickClearMatches = () => {
        axios.put(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-cupolillo/clear"
        )
            .then(() => {
                showMatch()
            }).catch((err) => {
                console.log(err.message)
            })
    }

    const renderMatches = match.lenght ? (
        match.map((profile) => {
            return (
                <p key={profile.id}>
                    {" "}
                    <img src={profile.photo} />
                    {profile.name}
                </p>
            )
        })
    ) : <p>Você não possui Matchs =( </p>

    return (
        <div>
            {renderMatches}
            <button onClick={onClickClearMatches}>Limpar tudo</button>
        </div>
    )
}