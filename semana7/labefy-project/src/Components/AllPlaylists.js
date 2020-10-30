import React from "react";
import axios from "axios";
import styled from "styled-components";

const DeleteButton = styled.button `
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
const PlaylistContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  max-width: 30%;
`

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";

const axiosConfig = {
  headers: {
    Authorization: "beatriz-cupolillo-dumont",
  },
};

class AllPlaylists extends React.Component {
    state = {
        allPlaylists: []
    }

    componentDidMount = () => {
        this.getPlaylists();
    }

    getPlaylists = async () => {
        try {
            const response = await axios.get(baseUrl, axiosConfig);
            this.setState({allPlaylists: response.data.result.list});
        } catch(error) {
            console.log(error.message);
            window.alert("Ops..Algo deu errado. Tente novamente.");
          }
        }


    deletePlaylists = async (playlistId) => {
        if (window.confirm('Tem certeza que deseja deletar?')){
            try {
              await axios.delete(`${baseUrl}/${playlistId}`, axiosConfig);
              this.getPlaylists();
            } catch (error) {
            console.log(error.message);
            window.alert("Ops..Algo deu errado. Tente novamente.");
            }
        }
    }

    render() {
        const renderedPlaylists = this.state.allPlaylists.map((playlist) => {
        return <p key={playlist.id}>{playlist.name}
        <DeleteButton onClick={() => this.deletePlaylists(playlist.id)}>Delete</DeleteButton>
        </p>;
        });
        
        return (
            <PlaylistContainer>
                <h3>Playlists</h3>
                {renderedPlaylists}
              </PlaylistContainer>
            );
          }
    }

export default AllPlaylists;