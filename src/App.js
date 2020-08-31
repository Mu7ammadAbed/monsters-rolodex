import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    monsters: [],
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => this.setState({ monsters: result }));
  }

  render() {
    return (
      <div className="App">
        <h1>Welcome to my new project</h1>
      </div>
    );
  }
}

export default App;
