import React, { Component } from "react";
import Movies from "./Componentes/Movies";
import NavBar from "./Componentes/navBar";

class App extends Component {


  render () {
    return (
      <div className="app container">
        <div className="jumbotron">
            <NavBar/>
        </div>
        <Movies/>
      </div>
    );
  } 
}

export default App;
