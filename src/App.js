import React from "react";
import CardList from "./components/CardList";
import { fish } from "./fish";
import "tachyons";
import "./App.css";
import Scroll from "./components/Scroll";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import Footer from "./components/Footer";
import InfoCard from "./components/InfoCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      fish: fish,
      searchfield: "",
      filteredList: fish,
      mode: "all",
    };
  }

  onComponentLoad() {
    this.setState({ filteredList: this.state.fish });
  }

  onSearchChange = async (event) => {
    await this.setState({ searchfield: event.target.value });
    const filteredFish = fish.filter((fish) => {
      return fish.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    this.setState({ filteredList: filteredFish });
  };

  filterReset = () => {
    let newList;
    newList = this.state.fish.sort(function (a, b) {
      var textA = a.id;
      var textB = b.id;
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    this.setState({ filteredList: newList });
  };

  filterFish = () => {
    this.filterReset();
    let fishList;
    fishList = fish.filter((fish) => {
      return fish.type === "fish";
    });
    this.setState({ filteredList: fishList });
  };

  filterBugs = () => {
    this.filterReset();
    let bugList;
    bugList = fish.filter((fish) => {
      return fish.type === "bug";
    });
    this.setState({ filteredList: bugList });
  };

  filterAlpha = () => {
    this.filterReset();
    let newList;
    newList = this.state.filteredList.sort(function (a, b) {
      var textA = a.name.toUpperCase();
      var textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
    this.setState({ filteredList: newList });
  };

  filterValue = () => {
    this.filterReset();
    let newList;
    newList = this.state.filteredList.sort(function (a, b) {
      var valueA = Number(a.value);
      var valueB = Number(b.value);
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    });
    this.setState({ filteredList: newList });
  };

  render() {
    const { filteredList } = this.state;

    return (
      <div className="tc app">
        <Header
          className="tc"
          filterFish={this.filterFish}
          filterBugs={this.filterBugs}
          filterReset={this.filterReset}
          filterAlpha={this.filterAlpha}
          filterValue={this.filterValue}
        >
          <SearchBox
            searchChange={this.onSearchChange}
            filterReset={this.filterReset}
          />
        </Header>

        <Scroll>
          <CardList fish={filteredList} />
        </Scroll>
        {/*        <Footer /> */}
      </div>
    );
  }
}

export default App;
