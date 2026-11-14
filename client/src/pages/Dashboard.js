import React, { useState } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import MovieRow from "../components/MovieRow";
import { movies } from "../data/movies";
import { Box, Typography } from "@mui/material";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const query = search.trim().toLowerCase();
  const filteredMovies = movies.filter((movie) =>
    [movie.title, movie.category, ...movie.genres]
      .some((value) => value.toLowerCase().includes(query))
  );

  const trending = filteredMovies.filter((m) => m.category === "Trending");
  const recommended = filteredMovies.filter((m) => m.category === "Recommended");
  const newReleases = filteredMovies.filter((m) => m.category === "New Releases");

  return (
    <div>
      <NavBar onSearch={setSearch} movies={movies} />
      <HeroSection />
      {filteredMovies.length === 0 ? (
        <Box role="status" sx={{ mt: 5, px: 2, textAlign: "center" }}>
          <Typography variant="h6">No movies found for “{search}”</Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Try a different title, genre, or category.
          </Typography>
        </Box>
      ) : (
        <>
          <MovieRow title="Trending Now" movies={trending} />
          <MovieRow title="Recommended For You" movies={recommended} />
          <MovieRow title="New Releases" movies={newReleases} />
        </>
      )}
    </div>
  );
};

export default Dashboard;
