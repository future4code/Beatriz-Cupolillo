import styled from "styled-components";

export const Image = styled.img `
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin-top: 20px;
`

export const CardContainer = styled.div `
    border: 1px dotted #e0e0e0;
    width: 340px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
` 

export const InfoContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const ButtonsContainer = styled.div `
    display: flex;
    > img {
        margin-left: 50px;
        margin-right: 50px;
        width:60px;;
        height:60px;;
    }
` 