import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Checkbox,
  FormControlLabel,
  Divider,
  IconButton,
} from "@mui/material";

/*
  - Social icons are inline SVGs so no external libs required.
  - Keeps the same red accent and dark cinematic feel.
*/

const GoogleIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 533.5 544.3" {...props}>
    <path fill="#4285f4" d="M533.5 278.4c0-18.5-1.6-36.3-4.6-53.6H272v101.3h147.3c-6.4 34.8-25.6 64.3-54.7 84v69.8h88.4c51.8-47.7 81.5-118 81.5-201.5z"/>
    <path fill="#34a853" d="M272 544.3c73.9 0 135.9-24.4 181.2-66.2l-88.4-69.8c-24.6 16.5-56 26.3-92.8 26.3-71 0-131.2-47.9-152.7-112.2H30.4v70.6c45.4 89.3 137.6 151.3 241.6 151.3z"/>
    <path fill="#fbbc04" d="M119.3 324.4c-10.7-31.6-10.7-65.5 0-97.1V156.7H30.4c-45.4 89.3-45.4 195.1 0 284.4l88.9-69.8z"/>
    <path fill="#ea4335" d="M272 107.9c39.9 0 75.8 13.7 104 40.4l78.1-78.1C405.4 23.2 345.4 0 272 0 168 0 75.8 61.9 30.4 151.2l88.9 70.6C140.8 155.8 201 107.9 272 107.9z"/>
  </svg>
);

const FacebookIcon = (props) => (
  <svg width="20" height="20" viewBox="0 0 24 24" {...props}>
    <path fill="#1877F2" d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z"/>
  </svg>
);

const AppleIcon = (props) => (
  <svg width="18" height="20" viewBox="0 0 1024 1024" {...props}>
    <path fill="#fff" d="M880 737c-14 32-31 61-53 88-45 56-92 86-141 86-30 0-64-11-102-32-32-18-64-18-96 0-38 21-72 32-102 32-49 0-96-30-141-86-22-27-39-56-53-88C115 608 160 453 248 412c32-16 71-27 116-34 28-5 57-7 87-7 30 0 61 3 93 9 29 6 57 11 83 11 28 0 53-5 76-15 35-14 69-27 102-40 34-13 61-21 82-21 36 0 71 12 107 35 86 55 130 206 60 366zM646 110c26-31 43-73 45-121-42 2-91 26-116 56-26 33-42 74-45 121 36 0 76-16 116-56z"/>
  </svg>
);

const LoginPage = ({ onLogin, onSignup }) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(180deg, #070707, #0f0f0f)",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 460,
          borderRadius: 3,
          p: { xs: 3, sm: 5 },
          background: "rgba(10,10,10,0.85)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
          color: "#fff",
        }}
      >
        <Typography variant="h4" fontWeight={800} textAlign="center" mb={2}>
          Login to Your Account
        </Typography>

        <Typography variant="body2" color="rgba(255,255,255,0.75)" textAlign="center" mb={3}>
          Welcome back — sign in to continue to FlixZone
        </Typography>

        <Box component="form" onSubmit={(e) => { e.preventDefault(); onLogin(); }} noValidate>
          <TextField
            fullWidth
            label="Email"
            variant="filled"
            type="email"
            margin="normal"
            InputLabelProps={{ style: { color: "#bbb" } }}
            sx={{
              background: "rgba(255,255,255,0.03)",
              borderRadius: 1,
              "& .MuiFilledInput-root": {
                color: "white",
                "&:before, &:after": { borderBottom: "none" },
              },
            }}
            required
          />

          <TextField
            fullWidth
            label="Password"
            variant="filled"
            type="password"
            margin="normal"
            InputLabelProps={{ style: { color: "#bbb" } }}
            sx={{
              background: "rgba(255,255,255,0.03)",
              borderRadius: 1,
              "& .MuiFilledInput-root": {
                color: "white",
                "&:before, &:after": { borderBottom: "none" },
              },
            }}
            required
          />

          <Box display="flex" alignItems="center" justifyContent="space-between" mt={1}>
            <FormControlLabel
              control={<Checkbox sx={{ color: "#e50914" }} />}
              label={<Typography sx={{ color: "#bbb" }}>Remember me</Typography>}
            />
            <Button variant="text" sx={{ color: "#e50914", textTransform: "none" }}>
              Forgot password?
            </Button>
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 2,
              py: 1.4,
              backgroundColor: "#e50914",
              fontWeight: 800,
              textTransform: "none",
              "&:hover": { backgroundColor: "#b00610" },
            }}
          >
            Login
          </Button>
        </Box>

        <Divider color="#222" sx={{ my: 3, borderColor: "#2d2d2d" }}>
          <Typography variant="body2" color="rgba(255,255,255,0.7)">Or Continue With</Typography>
        </Divider>

        <Box display="flex" justifyContent="center" gap={2} mb={2}>
          <IconButton
            aria-label="google"
            sx={{
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.02)",
              width: 52,
              height: 52,
            }}
          >
            <GoogleIcon />
          </IconButton>

          <IconButton
            aria-label="facebook"
            sx={{
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.02)",
              width: 52,
              height: 52,
            }}
          >
            <FacebookIcon />
          </IconButton>

          <IconButton
            aria-label="apple"
            sx={{
              border: "1px solid rgba(255,255,255,0.06)",
              background: "rgba(255,255,255,0.02)",
              width: 52,
              height: 52,
            }}
          >
            <AppleIcon />
          </IconButton>
        </Box>

        <Typography variant="body2" color="rgba(255,255,255,0.7)" textAlign="center">
          Don’t have an account?{" "}
          <Box component="span" onClick={onSignup} sx={{ color: "#e50914", cursor: "pointer", fontWeight: 700 }}>
            Sign Up
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
