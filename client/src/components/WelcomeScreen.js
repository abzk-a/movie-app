import React, { useState } from "react";
import { Box, Button, Typography, Modal, Fade, IconButton } from "@mui/material";
import { keyframes } from "@mui/system";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

// 🎞️ Floating animations
const floatA = keyframes`
  0% { transform: translateY(0px) rotate(-2deg) scale(1); opacity: 0.95; }
  50% { transform: translateY(-22px) rotate(1deg) scale(1.03); opacity: 1; }
  100% { transform: translateY(0px) rotate(-2deg) scale(1); opacity: 0.95; }
`;

const floatB = keyframes`
  0% { transform: translateY(0px) rotate(3deg) scale(1); opacity: 0.9; }
  50% { transform: translateY(-14px) rotate(-1deg) scale(1.02); opacity: 1; }
  100% { transform: translateY(0px) rotate(3deg) scale(1); opacity: 0.9; }
`;

const floatC = keyframes`
  0% { transform: translateY(0px) rotate(-1deg) scale(1); opacity: 0.9; }
  50% { transform: translateY(-18px) rotate(2deg) scale(1.03); opacity: 1; }
  100% { transform: translateY(0px) rotate(-1deg) scale(1); opacity: 0.9; }
`;

// 🎬 Replace with your local images in client/public/movies/
const posters = [
  {
    title: "The Creator",
    img: "assets/movies/thecreator.jpg",
    trailer: "https://www.youtube.com/embed/abc123?autoplay=1",
    tagline: "A thrilling experience you won’t forget.",
  },
  {
    title: "Barbie",
    img: "assets/movies/barbie.jpg",
    trailer: "https://www.youtube.com/embed/xyz456?autoplay=1",
    tagline: "An emotional journey through time.",
  },
  {
    title: "Interstellar",
    img: "assets/movies/interstellar.jpg",
    trailer: "https://www.youtube.com/embed/qwe789?autoplay=1",
    tagline: "Adventure awaits in every frame.",
  },
  {
    title: "Oppenheimer",
    img: "assets/movies/oppenheimer.jpg",
    trailer: "https://www.youtube.com/embed/klm987?autoplay=1",
    tagline: "A story beyond imagination.",
  },
];

const WelcomeScreen = ({ onGetStarted }) => {
  const [open, setOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOpen = (movie) => {
    setSelectedMovie(movie);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => setSelectedMovie(null), 300);
  };

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          backgroundImage: "url('/assets/movies/v1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          bgcolor: "#000",
        }}
      >
        {/* gradient overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.75) 35%, rgba(0,0,0,0.95) 100%)",
            zIndex: 2,
          }}
        />

        {/* animated posters */}
        <Box sx={{ position: "absolute", inset: 0, zIndex: 3 }}>
          {posters.map((movie, index) => {
            const floatAnim = [floatA, floatB, floatC, floatA][index % 3];
            const positions = [
              { left: "6%", top: "12%" },
              { right: "6%", top: "10%" },
              { left: "18%", bottom: "8%" },
              { right: "18%", bottom: "6%" },
            ][index];

            return (
              <Box
                key={movie.title}
                onClick={() => handleOpen(movie)}
                sx={{
                  position: "absolute",
                  width: 160,
                  height: 240,
                  borderRadius: 2,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                  backgroundImage: `url(${movie.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "rotate(-4deg)",
                  animation: `${floatAnim} ${8 + index * 2}s ease-in-out infinite`,
                  opacity: 0.95,
                  cursor: "pointer",
                  transition: "transform 0.3s ease, opacity 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.08)",
                    opacity: 1,
                    zIndex: 10,
                  },
                  ...positions,
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 10,
                    left: 0,
                    right: 0,
                    textAlign: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: 14,
                    textShadow: "0 4px 12px rgba(0,0,0,0.9)",
                  }}
                >
                  {movie.title}
                </Box>
              </Box>
            );
          })}
        </Box>

        {/* welcome text */}
        <Box
          sx={{
            position: "relative",
            zIndex: 5,
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            px: 3,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                color: "#fff",
                fontWeight: 800,
                letterSpacing: 0.5,
                textShadow: "0 8px 30px rgba(0,0,0,0.6)",
              }}
            >
              Welcome to{" "}
              <Box component="span" sx={{ color: "#e50914", fontWeight: 900 }}>
                FlixZone
              </Box>
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                color: "rgba(255,255,255,0.85)",
                maxWidth: 720,
                mx: "auto",
                mb: 4,
              }}
            >
              Discover your own movie collection — straight from your local gallery.
            </Typography>

            <Button
              variant="contained"
              onClick={onGetStarted}
              sx={{
                backgroundColor: "#e50914",
                color: "#fff",
                px: 5,
                py: 1.5,
                borderRadius: "999px",
                fontSize: "1.05rem",
                fontWeight: 700,
                boxShadow: "0 8px 30px rgba(229,9,20,0.35)",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#b00610",
                  transform: "translateY(-3px)",
                },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Movie Trailer Modal */}
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: 600, md: 720 },
              bgcolor: "rgba(10,10,10,0.95)",
              borderRadius: 3,
              boxShadow: "0 25px 80px rgba(0,0,0,0.9)",
              outline: "none",
              overflow: "hidden",
              backdropFilter: "blur(10px)",
            }}
          >
            {selectedMovie && (
              <>
                <Box position="relative">
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      color: "#fff",
                      bgcolor: "rgba(0,0,0,0.4)",
                      "&:hover": { bgcolor: "rgba(0,0,0,0.6)" },
                    }}
                  >
                    <CloseIcon />
                  </IconButton>

                  <iframe
                    src={selectedMovie.trailer}
                    title={selectedMovie.title}
                    allow="autoplay; encrypted-media"
                    style={{
                      width: "100%",
                      height: "400px",
                      border: "none",
                    }}
                  />
                </Box>

                <Box p={3}>
                  <Typography variant="h5" fontWeight={700} mb={1}>
                    {selectedMovie.title}
                  </Typography>
                  <Typography variant="body1" color="rgba(255,255,255,0.75)" mb={2}>
                    {selectedMovie.tagline}
                  </Typography>

                  <Button
                    startIcon={<PlayArrowIcon />}
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#e50914",
                      fontWeight: 700,
                      py: 1.3,
                      textTransform: "none",
                      "&:hover": { backgroundColor: "#b00610" },
                    }}
                    onClick={() =>
                      window.open(selectedMovie.trailer.replace("?autoplay=1", ""), "_blank")
                    }
                  >
                    Watch Full Trailer on YouTube
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default WelcomeScreen;
