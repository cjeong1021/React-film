import React, { Component } from "react";
import FilmPoster from "./FilmPoster";
import Fave from "./Fave";

class FilmRow extends Component {
  handleDetailsClick = (film) => {
    console.log("fetching details for " + film);
  };
  render() {
    let filmdate = new Date(this.props.film.release_date);
    const filmyear = filmdate.getFullYear();

    return (
      <div className="film-row">
        <FilmPoster film={this.props.film} />

        <div
          className="film-summary"
          onClick={() => this.handleDetailsClick(this.props.film.title)}
        >
          <Fave
            film={this.props.film}
            onFaveToggle={this.props.onFaveToggle()}
            fave={this.props.isFave}
          />
          <h1>{this.props.film.title}</h1>
          <p>{filmyear}</p>
        </div>
      </div>
    );
  }
}

export default FilmRow;
