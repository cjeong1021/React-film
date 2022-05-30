import React, { Component } from "react";
import "./App.css";
import FilmListing from "./FilmListing";
import FilmDetails from "./FilmDetails";
import filmData from "./TMDB";

class App extends Component {
  constructor() {
    super();

    this.state = {
      films: filmData.films,
      faves: [],
      current: {}
    };
  }

  handleFaveToggle = (film) => {
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex >= 0) {
      console.log("removing");
      faves.splice(film);
    } else {
      console.log("adding");
      faves.push(film);
    }

    this.setState({ faves });
  };

  handleDetailsClick = () => {
    console.log(this.state.current);
  };

  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing
            filmData={this.state.films}
            faves={this.state.faves}
            onFaveToggle={() => this.handleFaveToggle}
          />

          <FilmDetails
            filmData={this.state.current}
            // onCurrentClick={() => this.handleDetailsClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
