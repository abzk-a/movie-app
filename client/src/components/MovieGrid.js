import React, { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Chip, Box, Button } from "@mui/material";

const MovieGrid = ({ movies }) => {
  const [hovered, setHovered] = useState(null);

  return (
    <Grid container spacing={3} sx={{ mt: 2 }}>
      {movies.map((movie, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 6,
              overflow: "hidden",
              cursor: "pointer",
              transition: "transform 0.3s, box-shadow 0.3s",
              position: "relative",
              "&:hover": { transform: "scale(1.05)", boxShadow: 12 },
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            {hovered === index ? (
              <Box sx={{ position: "relative", height: 300 }}>
                <video
                  src={movie.trailer}
                  autoPlay
                  muted
                  loop
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </Box>
            ) : (
              <CardMedia component="img" height="300" image={movie.image} alt={movie.title} />
            )}

            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {movie.title}
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, flexWrap: "wrap", mt: 1 }}>
                {movie.genres.map((g, i) => (
                  <Chip key={i} label={g} size="small" color="primary" />
                ))}
              </Box>

              <Typography sx={{ mt: 1, fontWeight: "bold" }}>⭐ {movie.rating}</Typography>

              <Button variant="outlined" sx={{ mt: 1, px: 3, py: 0.5, borderRadius: 2 }}>
                Watch
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieGrid;
