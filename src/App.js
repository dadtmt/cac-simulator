import React, { Component } from "react";
import { Jumbotron } from "reactstrap";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron>
          <h1 className="display-3">CAC Simulator</h1>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
