import React from "react";
import axios from "axios";
import styled from "styled-components"

const DeleteButton = styled.span`
  color: red;
`;

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const axiosConfig = {
  headers: {
    Authorization: "beatriz-cupolillo-dumont"
  }
};

class UserList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    axios
      .get(baseUrl, axiosConfig)
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((err) => {
        console.log(err.message);
        alert("Visualização não disponível no momento");
      });
  };

  deleteUser = (userId) => {
    axios
      .delete(`${baseUrl}/${userId}`, axiosConfig)
      .then((response) => {
        alert("Usuário deletado com sucesso!");
        this.getAllUsers();
      })
      .catch((error) => {
        console.log(error.message);
        alert("Algo deu errado... Tente de novo");
      });
  };

  render() {
    const RenderUser = this.state.users.map((user) => {
      return (
        <p key={user.id}> 
        {user.name} 
        <DeleteButton onClick={() => this.deleteUser(user.id)}>
            X
        </DeleteButton>
      </p>
      );
    });
    return (
      <div>
        <h1>Lista de Usuários Cadastrados</h1>
        {RenderUser}
      </div>
    );
  }
}

export default UserList;
