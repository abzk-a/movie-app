
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!movie) {
    return <p>Loading movie details...</p>;
  }

  return (
    <div style={{ background: "#121212", color: "#fff", minHeight: "100vh", padding: "2rem" }}>
      <Link to="/" style={{ color: "#04D", textDecoration: "none" }}>
        ← Back to Movies
      </Link>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} style={{ width: "300px", borderRadius: "12px" }} />
      <p>Year: {movie.year}</p>
      <p>Rating: ⭐ {movie.rating}</p>
      <p>Description: {movie.description || "No description available."}</p>
    </div>
  );
}

export default MovieDetail;
