import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MatchScreen() {
    const [profile, setProfile] = useState({})
    const [chooseProfile, setChooseProfile] = useState(false)


    const getProfile = () => {
        axios
        .get(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-cupolillo/person"
        )
        .then((res) => {
            setProfile(res.data.profile)
        }).catch((err)=> {
            console.log(err)
        })
    }

    const choosePerson = () => {
        const body = {
            id: profile.id,
            choice: true
        }
        axios
        .post(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/beatriz-cupolillo/choose-person",
            body
        )
        .then((res) => {
            getProfile()
            console.log("Deu certo a escolha")
        }).catch((err)=> {
            console.log(err)
        })
    }

    const onClickLike = () => {
        setChooseProfile(true)
        choosePerson()
        console.log("Gostei")
    }

    const onClickDislike = () => {
        setChooseProfile(false)
        choosePerson()
        console.log("Não Gostei")
    }

    return (
        <div>
            <img src={profile.photo} />
            <p>{profile.name}</p>
            <p>{profile.age}</p>
            <p>{profile.bio}</p>
            <button onClick={onClickDislike}> X </button>
            <button onClick={onClickLike}> ♥ </button>

        </div>
    )
}
