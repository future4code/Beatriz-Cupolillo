import React, { useEffect, useState } from "react";
import axios from "axios";
import { Image } from "./Styled"

export default function MatchList() {
    const [match, setMatch] = useState([])

    useEffect(() => {
        showMatch()
    }, [match])

    const showMatch = () => {
        axios.get(
          "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-cupolillo/matches"
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

    const renderMatches = 
        match.map((profile) => {
            return (
                <p key={profile.id}>
                    <Image img src={profile.photo} alt={profile.name}/>
                    {profile.name}
                </p>
            )
        })

    return (
        <div>
            {renderMatches}
            <button onClick={onClickClearMatches}>Limpar tudo</button>
        </div>
    )
}