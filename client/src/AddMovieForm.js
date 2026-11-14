import React, { useState } from "react";
import "./App.css";

function AddMovieForm({ onMovieAdded }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");

  const resetForm = () => {
    setTitle(""); setYear(""); setPoster(""); setRating("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const movie = { title, year, poster, rating: parseFloat(rating) };
    try {
      const res = await fetch("http://localhost:5000/api/movies", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(movie),
      });
      const newMovie = await res.json();
      onMovieAdded(newMovie);
      resetForm();
    } catch (err) { console.error("Add error:", err); }
  };

  return (
    <form className="add-movie-form" onSubmit={handleSubmit}>
      <h2>Add New Movie</h2>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      <input value={year} onChange={e => setYear(e.target.value)} placeholder="Year" required type="number" />
      <input value={poster} onChange={e => setPoster(e.target.value)} placeholder="Poster URL" required type="url" />
      <input value={rating} onChange={e => setRating(e.target.value)} placeholder="Rating (0-10)" required type="number" min="0" max="10" step="0.1" />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default AddMovieForm;
