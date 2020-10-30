import styled from "styled-components";

export const AppContainer = styled.div `
background-color: #2e2c2f;
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
  margin: 10px;
  border: 1px solid #E6E8E6;
 > h3 {
     color: white;
 }
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
  margin: 10px;
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

export const HeaderContainer = styled.div `
    display:flex;
    padding: 10px;
    height: 14vh;
    >h1{
        color: pink;
        margin-left: 20px;
    }
`