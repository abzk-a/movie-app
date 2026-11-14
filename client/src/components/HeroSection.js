import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import { movies } from "../data/movies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const heroMovies = movies.slice(0, 6);

  const settings = { dots: true, infinite: true, speed: 1200, autoplay: true, autoplaySpeed: 4000, slidesToShow: 1, slidesToScroll: 1, fade: true, pauseOnHover: true };

  return (
    <Box sx={{ position: "relative", height: "70vh", overflow: "hidden" }}>
      <Slider {...settings}>
        {heroMovies.map((movie, index) => (
          <Box
            key={index}
            sx={{
              height: "70vh",
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0)), url(${movie.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              color: "#fff",
              p: 4,
            }}
          >
            <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>{movie.title}</Typography>
            <Button variant="contained" sx={{ bgcolor: "secondary.main", fontWeight: "bold" }}>Watch Now</Button>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;

