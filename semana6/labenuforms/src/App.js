import React from "react";
import Etapa1 from "./components/Etapa1.js";
import Etapa2 from "./components/Etapa2.js";
import Etapa3 from "./components/Etapa3.js";
import Etapa4 from "./components/Etapa4.js";

class App extends React.Component {
  state = {
    etapa: 1,
  };

  IrParaProximaEtapa = () => {
    this.setState({
      etapa: this.state.etapa + 1,
    });
  };

  RenderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Etapa4 />;
      default:
        break;
    }
  };

  render() {
    return (
      <div>
        {this.RenderizaEtapa()}
        {this.state.etapa !== 4 && (
          <button onClick={this.IrParaProximaEtapa}>Próxima Etapa</button>
        )}
      </div>
    );
  }
}

export default App;
