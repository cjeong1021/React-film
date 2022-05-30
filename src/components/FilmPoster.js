import React from "react";

function FilmPoster(props) {
  return (
    <img
      src={"https://image.tmdb.org/t/p/w780" + props.film.poster_path}
      alt=""
    />
  );
}

export default FilmPoster;
