import React, { Component } from 'react';
import FilmPoster from './FilmPoster';
import Fave from './Fave';

function FilmRow(props) {
  let handleDetailClick = (e) => {
    e.stopPropagation();
    props.onDetailClick(props.film);
  };
  let filmdate = new Date(props.film.release_date);
  const filmyear = filmdate.getFullYear();

  return (
    <div className='film-row'>
      <FilmPoster film={props.film} />

      <div className='film-summary'>
        <Fave
          film={props.film}
          onFaveToggle={props.onFaveToggle()}
          fave={props.isFave}
        />
        <h1 onClick={handleDetailClick}>{props.film.title}</h1>
        <p>{filmyear}</p>
      </div>
    </div>
  );
}

export default FilmRow;
