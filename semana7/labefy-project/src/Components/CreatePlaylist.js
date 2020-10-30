import React from "react";
import axios from "axios";
import styled from "styled-components";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const axiosConfig = {
  headers: {
    Authorization: "beatriz-cupolillo-dumont",
  },
};

const PlaylistContainer = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ButtonDelete = styled.button``

class CreatePlaylist extends React.Component {
  state = {
    playlistValue: "",
  };

  createPlaylist = async () => {
    const body = {
      name: this.state.playlistValue,
    };
    try {
      await axios.post(baseUrl, body, axiosConfig);
      this.setState({ playlistValue: "" });
      window.alert("Playlist criada com sucesso!");
    } catch (error) {
      console.log(error.message);
      window.alert("Ops..Algo deu errado");
    }
  };
 
  onChangePlaylistValue = (event) => {
    this.setState({ playlistValue: event.target.value });
  };
  
  render() {
    return (
      <div>
        <h2>Crie sua nova Playlist</h2>
        <input
          value={this.state.playlistValue}
          placeholder="Digite o nome desejado"
          onChange={this.onChangePlaylistValue}
        />
        <button onClick={this.createPlaylist}>Criar Nova Playlist</button>
      </div>
    );
  }
}

export default CreatePlaylist;
