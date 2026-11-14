import React from "react";
import MovieCard from "./MovieCard";
import "./App.css";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie._id || movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MovieList;
