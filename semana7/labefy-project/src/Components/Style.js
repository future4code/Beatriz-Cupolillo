import styled from "styled-components";

export const AppContainer = styled.div `
background-color: black;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
`

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 30%;
  border: 1px solid white;
`
export const CreatePlaylistButton = styled.button `
    color: blue;
    border-radius: 3px;
    border: 2px blue solid;
    background-color: white;
    padding: 4px;
    margin-top: 20px;
    margin-bottom: 20px;
    &:hover{
        background-color: #f2f2f2;
    }
`

export const AllPlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  color: white;
  max-width: 30%;
  > h3 {
    color: white;
  }
`

export const DeleteButton = styled.button `
    color: tomato;
    border-radius: 3px;
    border: 2px tomato solid;
    background-color: white;
    padding: 4px;
    margin-left: 20px;
    &:hover{
        background-color: #f2f2f2;
    }
`

