import React, { Component } from "react";
import { data } from "./services/Data";
import "./App.scss";
import Title from "./components/Title";
import Pokelist from "./components/Pokelist";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data
    };
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Pokelist data={this.state.data} />
      </div>
    );
  }
}

export default App;
