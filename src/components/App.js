import React, { Component } from 'react';
import './App.css';
import FilmListing from './FilmListing';
import FilmDetails from './FilmDetails';
import filmData from './TMDB';

class App extends Component {
  constructor() {
    super();

    this.state = {
      films: filmData.films,
      faves: [],
      current: {},
    };
  }

  handleFaveToggle = (film) => {
    console.log(film);
    const faves = this.state.faves.slice();
    const filmIndex = faves.indexOf(film);

    if (filmIndex >= 0) {
      console.log('removing');
      faves.splice(filmIndex, 1);
    } else {
      console.log('adding');
      faves.push(film);
    }
    this.setState({ faves });
  };

  handleDetailsClick = (film) => {
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${filmData.api_key}&append_to_response=videos,images&language=en`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ current: data });
      })
      .catch(() => {
        console.log('API key missing');
      });
  };

  render() {
    return (
      <div className='App'>
        <div className='film-library'>
          <FilmListing
            filmData={this.state.films}
            faves={this.state.faves}
            onFaveToggle={() => this.handleFaveToggle}
            onDetailClick={() => this.handleDetailsClick}
          />

          <FilmDetails film={this.state.current} />
        </div>
      </div>
    );
  }
}

export default App;
