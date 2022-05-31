import React, { Component } from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {
  constructor() {
    super();

    this.state = {
      filter: 'all',
    };
  }
  handleFilterClick = (filter) => {
    console.log(`${filter}`);
    this.setState({
      filter: filter,
    });
  };

  render() {
    let allFilms;
    if (this.state.filter === 'all') {
      allFilms = this.props.filmData.map((film) => {
        return (
          <FilmRow
            film={film}
            key={film.id}
            onFaveToggle={(film) => this.props.onFaveToggle(film)}
            onDetailClick={this.props.onDetailClick()}
            isFave={this.props.faves.includes(film)}
          />
        );
      });
    } else {
      allFilms = this.props.faves.map((film) => {
        return (
          <FilmRow
            film={film}
            key={film.id}
            onFaveToggle={(film) => this.props.onFaveToggle(film)}
            onDetailClick={this.props.onDetailClick()}
            isFave={this.props.faves.includes(film)}
          />
        );
      });
    }

    return (
      <div className='film-list'>
        <h1 className='section-title'>FILMS</h1>
        <div className='film-list-filters'>
          <div
            className={`film-list-filter ${
              this.state.filter === 'all' ? 'is-active' : ''
            }`}
            onClick={() => this.handleFilterClick('all')}
          >
            ALL
            <span className='section-count'>{this.props.filmData.length}</span>
          </div>
          <div
            className={`film-list-filter ${
              this.state.filter === 'faves' ? 'is-active' : ''
            }`}
            onClick={() => this.handleFilterClick('faves')}
          >
            FAVES
            <span className='section-count'>{this.props.faves.length}</span>
          </div>
        </div>

        {allFilms}
      </div>
    );
  }
}

export default FilmListing;
