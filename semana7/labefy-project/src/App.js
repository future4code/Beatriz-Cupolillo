import { render } from "@testing-library/react";
import React from "react";
import CreatePlaylists from "./Components/CreatePlaylist";
import AllPlaylists from "./Components/AllPlaylists"
import styled from "styled-components";
import { AppContainer } from "./Components/Style"


class App extends React.Component {
  state = {
    createPlaylist: true,
    AllPlaylists: true
  };

  render() {
    const createdPlaylists = <AllPlaylists/>
    const newPlaylists = <CreatePlaylists/>
      return (
        <AppContainer>
            {createdPlaylists}
            {newPlaylists}
          </AppContainer>
    )
  }
}

export default App;