import React, { useState } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import MovieRow from "../components/MovieRow";
import { movies } from "../data/movies";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const filteredMovies = movies.filter((m) => m.title.toLowerCase().includes(search.toLowerCase()));

  const trending = filteredMovies.filter((m) => m.category === "Trending");
  const recommended = filteredMovies.filter((m) => m.category === "Recommended");
  const newReleases = filteredMovies.filter((m) => m.category === "New Releases");

  return (
    <div>
      <NavBar onSearch={setSearch} />
      <HeroSection />
      <MovieRow title="Trending Now" movies={trending} />
      <MovieRow title="Recommended For You" movies={recommended} />
      <MovieRow title="New Releases" movies={newReleases} />
    </div>
  );
};

export default Dashboard;
