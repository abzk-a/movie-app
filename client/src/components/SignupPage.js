
import React, { useState } from 'react';
import { Box, Paper, TextField, Button, Typography, InputAdornment, IconButton, Checkbox, FormControlLabel } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const bg = process.env.PUBLIC_URL + "/a1.jpg";

export default function SignupPage({ onSignup, onBack }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleSignup = () => {
    if (!termsChecked) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }
    onSignup();
  };

  return (
    <Box sx={{
      minHeight: "100vh",
      background: `linear-gradient(rgba(12,12,12,0.94),rgba(18,18,18,0.94)), url(${bg}) center/cover no-repeat fixed`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Paper elevation={10} sx={{
        p: 4, maxWidth: 360, width: '100%',
        borderRadius: 7,
        bgcolor: 'rgba(24,24,28,0.97)',
        boxShadow: '0 4px 22px 3px rgba(0,0,0,0.13)',
      }}>
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: 900, letterSpacing: '0.2px', color: '#fff', mb: 3 }}>
          Create Your Account
        </Typography>
        <TextField
          label="Username"
          fullWidth
          sx={{ mb: 2, input: { color: '#f9f9f9' } }}
          value={username}
          onChange={e => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon sx={{ color: '#aaa' }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Enter your email"
          type="email"
          fullWidth
          sx={{ mb: 2, input: { color: '#f9f9f9' } }}
          value={email}
          onChange={e => setEmail(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: '#aaa' }} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Create a password"
          type={showPw ? 'text' : 'password'}
          fullWidth
          sx={{ mb: 2, input: { color: '#f9f9f9' } }}
          value={password}
          onChange={e => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: '#aaa' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPw(s => !s)}
                  edge="end" size="small" sx={{ color: "#bbb" }}>
                  {showPw ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          label="Confirm password"
          type={showPw ? 'text' : 'password'}
          fullWidth
          sx={{ mb: 1, input: { color: '#f9f9f9' } }}
          value={confirm}
          onChange={e => setConfirm(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon sx={{ color: '#aaa' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPw(s => !s)}
                  edge="end" size="small" sx={{ color: "#bbb" }}>
                  {showPw ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={termsChecked}
              onChange={e => setTermsChecked(e.target.checked)}
              sx={{ color: '#eee' }}
            />
          }
          label={<span style={{ color: '#eee' }}>I agree to the Terms and Conditions</span>}
          sx={{ mb: 2 }}
        />
        <Button
          fullWidth size="large"
          variant="contained"
          sx={{
            background: "linear-gradient(90deg,#e90365,#ff4343,#7d52ff)",
            fontWeight: 600,
            letterSpacing: 1,
            py: 1,
            mb: 2,
            fontSize: 17
          }}
          onClick={handleSignup}
        >
          Sign Up
        </Button>
        <Typography variant="body2" align="center">
          Already have an account?
          <span
            style={{ color: '#e90365', fontWeight: 700, cursor: 'pointer', marginLeft: 5 }}
            onClick={onBack}
          > Log In
          </span>
        </Typography>
      </Paper>
    </Box>
  );
}
