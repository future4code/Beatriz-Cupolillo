import React, { useState } from "react";
import Header from "./Components/Header/Header"
import styled from "styled-components";
import MatchList from "./Components/MatchList/MatchList"
import MatchScreen from "./Components/MatchScreen/MatchScreen"

const AppContainer = styled.div `
    width: 375px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    overflow: hidden;
` 

export default function App() {
  const [showScreen, setShowScreen] =  useState(false)

  const openMatchScreen = () =>{
    if (!showScreen){
      return(
        <MatchScreen />
      )
    }else {
      return(
        <MatchList />
      ) 

    }

  }

  const newScreen = () => {
    setShowScreen(!showScreen)
  }


  return (
        <AppContainer>
          <Header />
          <button onClick={newScreen}>ABRIR LISTA MATCH</button>
          {openMatchScreen()}
        </AppContainer>
  );
}