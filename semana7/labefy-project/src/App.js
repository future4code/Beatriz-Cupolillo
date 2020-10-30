import { render } from "@testing-library/react";
import React from "react";
import CreatePlaylists from "./Components/CreatePlaylist";
import AllPlaylists from "./Components/AllPlaylists"
import styled from "styled-components";

const AppContainer = styled.div `
  background-color: #f2f2f2;
`



class App extends React.Component {
  state = {
    createPlaylist: false,
    AllPlaylists: true
  };

  render() {
    const currentPage = <AllPlaylists/>
      return (
        <AppContainer>
          <h1></h1>
            {currentPage}
          </AppContainer>
    )
  }
}

export default App;