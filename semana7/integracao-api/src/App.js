import React from "react";
import axios from "axios";



class App extends React.Component{
  state = {
    users: [],
    inputName: "",
    inputEmail: ""
  }

  getUser = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
          headers: {
            Authorization: "beatriz-cupolillo-dumont"
          }
        }
      )
      .then((response) => {
        this.setState({users: response.data });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <div className="App">
        <div>
          <label>Nome:</label>
          <input type="text"/>
          <label>E-mail:</label>
          <input type="email"/>
          <button>Salvar</button>
        </div>
      </div>
    );
  }
}


export default App;
