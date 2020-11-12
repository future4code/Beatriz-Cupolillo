import Header from "./Components/Header/Header"
import styled from "styled-components";
import { createGlobalStyle, withTheme } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: pink;
    font-family: Roboto, sans-serif;
  }
  * {
    box-sizing: border-box;
  }
`

const AppContainer = styled.div `
    width: 400px;
    height: 600px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid black;
    border-radius: 5px;
    background-color: white;
` 

const App = () => {
	return (
    <withTheme>
			<GlobalStyle/>
			<AppContainer>
				<Header/>
			</AppContainer>
    </withTheme>
	)
}
export default App;