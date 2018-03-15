import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">CAC Simulator</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
