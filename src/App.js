import React, { Component } from "react";
import "./App.css";
import CardList from "./Components/card-list/card-list.component";
import Search from "./Components/search/search.component";

class App extends Component {
  state = {
    monsters: [],
    searchField: "",
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => this.setState({ monsters: result }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <Search handleChange={this.handleChange} />
        <CardList list={filteredMonsters} />
      </div>
    );
  }
}

export default App;
