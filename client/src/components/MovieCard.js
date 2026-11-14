import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

export default function MovieCard({ poster, title, year, genres, rating }) {
  return (
    <Card sx={{ bgcolor: "#1C1E22", borderRadius: 3, maxWidth: 240, mx: "auto", boxShadow: 6 }}>
      <CardMedia component="img" height="320" image={poster} alt={title} sx={{ borderRadius: 2 }} />
      <CardContent>
        <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700 }}>{title}</Typography>
        <Typography sx={{ color: "#ccc", fontSize: 14 }}>{year} &bull; {genres.join(', ')}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <StarIcon sx={{ color: "#ffd700", fontSize: 22 }} />
          <Typography sx={{ color: "#ffd700", fontWeight: 700, ml: 0.5 }}>{rating}</Typography>
          <Button size="small" variant="outlined" sx={{ color: "#e90365", ml: "auto", borderColor: "#e90365" }}>
            View
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
