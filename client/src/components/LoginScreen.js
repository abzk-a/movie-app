import React, { useState } from "react";
import {
  Box, Paper, TextField, Button, Typography, InputAdornment, IconButton, Checkbox, FormControlLabel, Divider
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";

const bg = process.env.PUBLIC_URL + "/a1.jpg";

export default function LoginScreen({ onLogin, onSignup }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(rgba(12,12,12,0.94),rgba(18,18,18,0.94)), url(${bg}) center/cover no-repeat fixed`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Paper
        elevation={11}
        sx={{
          p: { xs: 3, sm: 4 },
          maxWidth: 370,
          width: "100%",
          borderRadius: 6,
          bgcolor: "rgba(36,36,38,0.98)",
          boxShadow: "0 4px 32px 0 #e9036545, 0 0px 0px #fff0"
        }}
      >
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: 900,
            color: "#fff",
            mb: 3,
            letterSpacing: "1.5px",
            fontSize: { xs: 22, sm: 23, md: 24 },
            fontFamily: "'Montserrat','Roboto',sans-serif",
          }}
        >
          Login to Your Account
        </Typography>
        <TextField
          label="Enter your email"
          type="email"
          fullWidth
          sx={{
            mb: 2, input: { color: "#f9f9f9" },
            "& label": { color: "#eee" },
            "& fieldset": { borderColor: "#e90365" }
          }}
          value={email}
          onChange={e => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: "#e90365" }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Enter your password"
          type={showPw ? "text" : "password"}
          fullWidth
          sx={{
            mb: 1, input: { color: "#f9f9f9" },
            "& label": { color: "#eee" },
            "& fieldset": { borderColor: "#e90365" }
          }}
          value={password}
          onChange={e => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: "#e90365" }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPw(s => !s)}
                  edge="end"
                  size="small"
                  sx={{ color: "#bbb" }}
                >
                  {showPw ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={remember}
              sx={{ color: "#eee" }}
              onChange={e => setRemember(e.target.checked)}
            />
          }
          label={<span style={{ color: "#eee", fontWeight: 500 }}>Remember me</span>}
          sx={{ mb: 2, mt: 0.2 }}
        />
        <Button
          fullWidth
          size="large"
          variant="contained"
          sx={{
            background: "linear-gradient(90deg,#e90365,#ff4343,#7d52ff)",
            fontWeight: 700,
            letterSpacing: 1.1,
            py: 1,
            mb: 2,
            fontSize: 17,
            borderRadius: 3
          }}
          onClick={onLogin}
        >
          LOGIN
        </Button>
        <Typography
          sx={{
            color: "#e90365",
            fontWeight: 600,
            mb: 2,
            fontSize: 15,
            textAlign: "center",
            cursor: "pointer"
          }}
        >
          Forgot your password?
        </Typography>
        <Divider sx={{ my: 2, bgcolor: "#353545" }}>
          <span style={{ color: "#bbb", fontWeight: 600, fontSize: 15 }}>Or Continue With</span>
        </Divider>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 2 }}>
          <IconButton sx={{ bgcolor: "#fff", color: "#e90365", borderRadius: 2, "&:hover": { bgcolor: "#f9f9f9" } }}>
            <GoogleIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: "#fff", color: "#1976D2", borderRadius: 2, "&:hover": { bgcolor: "#f9f9f9" } }}>
            <FacebookIcon />
          </IconButton>
          <IconButton sx={{ bgcolor: "#fff", color: "#000", borderRadius: 2, "&:hover": { bgcolor: "#f9f9f9" } }}>
            <AppleIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" align="center" sx={{ color: "#fff" }}>
          Don’t have an account?
          <span
            style={{ color: "#e90365", fontWeight: 700, cursor: "pointer", marginLeft: 5 }}
            onClick={onSignup}
          > Sign Up
          </span>
        </Typography>
      </Paper>
    </Box>
  );
}
