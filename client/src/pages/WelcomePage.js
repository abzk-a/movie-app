import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const bg = process.env.PUBLIC_URL + "/a1.jpg";

export default function WelcomePage({ onGetStarted }) {
  return (
    <Box sx={{
      minHeight: "100vh",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      px: 3,
      background: `linear-gradient(135deg, rgba(24,24,28,0.85), rgba(45,5,60,0.85)), url(${bg}) center/cover no-repeat fixed`,
      textAlign: 'center',
      color: 'white',
      fontFamily: "'Montserrat', sans-serif",
      animation: "fadeIn 1.2s ease forwards"
    }}>
      <Typography variant="h2" sx={{ fontWeight: 900, mb: 3, letterSpacing: '-1.1px' }}>
        Welcome to <br /> FlixZone
      </Typography>
      <Typography variant="body1" sx={{ maxWidth: 430, fontSize: 18, mb: 5, fontWeight: 400, opacity: 0.85 }}>
        One App, Endless Recommendations.<br />
        Offering tailored content just for you!
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={onGetStarted}
        sx={{
          background: 'linear-gradient(90deg, #e90365, #7d52ff)',
          letterSpacing: 1.5,
          paddingX: 5,
          paddingY: 1.5,
          fontWeight: 700,
          fontSize: 18,
          color: 'white',
          boxShadow: '0 6px 15px #e90365cc',
          transition: 'box-shadow 0.3s ease',
          '&:hover': {
            boxShadow: '0 8px 40px #e90365ff',
            background: 'linear-gradient(90deg, #ff4a84, #a072ff)'
          }
        }}
      >
        Get Started
      </Button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(32px);}
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
}
