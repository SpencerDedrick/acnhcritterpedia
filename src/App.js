import React from "react";
import CardList from "./components/CardList";
import { fish } from "./fish";
import "tachyons";
import "./App.css";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fish: fish,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    console.log(this.state.searchfield);
  };

  render() {
    const { fish, searchfield } = this.state;
    const filteredFish = fish.filter((fish) => {
      return fish.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="tc app">
        <Header>
          <SearchBox searchChange={this.onSearchChange} />
        </Header>
        <div className="container">
          <Scroll>
            <CardList fish={filteredFish} />
          </Scroll>
        </div>
      </div>
    );
  }
}

export default App;
