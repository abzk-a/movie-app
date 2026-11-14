import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Slider from "react-slick";
import { movies } from "../data/movies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const heroMovies = movies.slice(0, 6);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: true,
  };

  return (
    <Box sx={{ position: "relative", height: "70vh", overflow: "hidden" }}>
      <Slider {...settings}>
        {heroMovies.map((movie, index) => (
          <Box key={index}
            sx={{
              position: "relative",
              height: "70vh",
              width: "100%",
              display: "flex",
              alignItems: "flex-end"
            }}>
            <img
              src={movie.image}
              alt={movie.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                filter: "brightness(0.7)"
              }}
            />
            {/* Overlay gradient for better text contrast */}
            <Box sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%",
              height: "100%",
              background: "linear-gradient(to top, rgba(20,20,20,0.72) 35%, rgba(0,0,0,0.20) 80%)",
              zIndex: 1
            }}/>
            <Box
              sx={{
                position: "absolute",
                left: 0,
                bottom: 0,
                p: 4,
                color: "#fff",
                zIndex: 2
              }}
            >
              <Typography variant="h3" sx={{ mb: 2, fontWeight: "bold" }}>
                {movie.title}
              </Typography>
              <Button variant="contained" sx={{ bgcolor: "secondary.main", fontWeight: "bold" }}>
                Watch Now
              </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HeroSection;
