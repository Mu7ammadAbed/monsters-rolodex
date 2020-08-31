import React, { Component } from "react";
import "./App.css";
import CardList from "./Components/card-list/card-list.component";

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
    const { monsters } = this.state;
    return (
      <div className="App">
        <CardList list={monsters} />
      </div>
    );
  }
}

export default App;
