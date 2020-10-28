import React from "react";
import axios from "axios";

class UserList extends React.Component {
  state = {
    users: [],
  };

  componentDidMount = () => {
    this.getUsers();
  };

  getUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "beatriz-cupolillo-dumont",
          },
        }
      )
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch((err) => {
        console.log(err.message);
        alert("Visualização não disponível no momento");
      });
  };

  render() {
    const RenderUser = this.state.users.map((user) => {
      return <p key={user.id}> {user.name} </p>;
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
