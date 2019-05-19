import React, { Component } from "react";
import { data } from "./services/Data";
import "./App.scss";
import Title from "./components/Title";
import Pokelist from "./components/Pokelist";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      fav: false,
    };

    this.handlerFavorite = this.handlerFavorite.bind(this);
  }

  
 handlerFavorite(event){
    this.setState((prevState, props) => {
      return {
        fav: prevState.fav ? false : true,
      };
    });
  }


  render() {
    return (
      <div className="App">
        <Title />
        <Pokelist 
        data={this.state.data} 
        action={this.handlerFavorite} 
        favstate={this.state.fav}/>
      </div>
    );
  }
}

export default App;
