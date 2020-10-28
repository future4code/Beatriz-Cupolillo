import React from "react";
import axios from "axios";

class Register extends React.Component {
  state = {
    nameValue: "",
    emailValue: "",
  };

  onChangeNameValue = (event) => {
    this.setState({ nameValue: event.target.value });
  };
  onChangeEmailValue = (event) => {
    this.setState({ emailValue: event.target.value });
  };
  createNewUser = () => {
    const body = {
      name: this.state.nameValue,
      email: this.state.emailValue,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
          headers: {
            Authorization: "beatriz-cupolillo-dumont",
          },
        }
      )
      .then((response) => {
        this.setState({ nameValue: "", emailValue: "" });
        alert("Usuário Cadastrado com sucesso");
      })
      .catch((error) => {
        console.log(error.message);
        // alert("Algo deu errado...Tente de novo");
      });
  };
  render() {
    return (
      <div>
        <h3>Cadastro Usuário</h3>
        <div>
          <label>Nome:</label>
          <input
            placeholder="Digite seu nome"
            value={this.state.nameValue}
            onChange={this.onChangeNameValue}
          />
        </div>
        <div>
          <label>E-mail:</label>
          <input
            placeholder="Digite seu e-mail"
            value={this.state.emailValue}
            onChange={this.onChangeEmailValue}
          />
        </div>
        <button onClick={this.createNewUser}>Salvar</button>
      </div>
    );
  }
}

export default Register;
