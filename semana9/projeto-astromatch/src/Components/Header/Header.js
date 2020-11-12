import React from "react";
import { HeaderContainer } from "./Styled"
import Logo from "../../img/AstroMatch-logo.png"

export default function Header (){
    return(
        <HeaderContainer>
            <img src={Logo} alt="Logo da AstroMatch Pink"/>
        </HeaderContainer>
    )

}