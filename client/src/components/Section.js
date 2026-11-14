import React from "react";
import { Box, Typography } from "@mui/material";
import MovieGrid from "./MovieGrid";

const Section = ({ title, movies }) => {
  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ mb: 3, fontWeight: "bold" }}>
        {title}
      </Typography>
      <MovieGrid movies={movies} />
    </Box>
  );
};

export default Section;
