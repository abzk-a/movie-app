import React, { useRef, useState } from "react";
import { Box, Typography, Chip, IconButton } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const MovieRow = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <Box sx={{ mt: 5, position: "relative" }}>
      <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold", ml: 2 }}>
        {title}
      </Typography>

      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          top: "40%",
          left: 0,
          zIndex: 10,
          bgcolor: "rgba(0,0,0,0.5)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ChevronLeft />
      </IconButton>

      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          top: "40%",
          right: 0,
          zIndex: 10,
          bgcolor: "rgba(0,0,0,0.5)",
          color: "#fff",
          "&:hover": { bgcolor: "rgba(0,0,0,0.7)" },
        }}
      >
        <ChevronRight />
      </IconButton>

      <Box
        ref={rowRef}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          gap: 2,
          px: 1,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {movies.map((movie, index) => (
          <Box
            key={index}
            sx={{
              minWidth: 200,
              cursor: "pointer",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.08)" },
              position: "relative",
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === index ? (
              <video
                src={movie.trailer}
                autoPlay
                muted
                loop
                style={{ width: "100%", borderRadius: 6, height: 300, objectFit: "cover" }}
              />
            ) : (
              <img
                src={movie.image}
                alt={movie.title}
                style={{ width: "100%", borderRadius: 6, height: 300, objectFit: "cover" }}
              />
            )}
            <Box sx={{ mt: 1 }}>
              <Typography sx={{ fontWeight: "bold" }}>{movie.title}</Typography>
              <Box sx={{ display: "flex", gap: 0.5, mt: 0.5, flexWrap: "wrap" }}>
                {movie.genres.map((g, i) => (
                  <Chip key={i} label={g} size="small" color="primary" />
                ))}
              </Box>
              <Typography sx={{ fontWeight: "bold", mt: 0.5 }}>⭐ {movie.rating}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default MovieRow;
