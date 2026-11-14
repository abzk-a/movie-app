// src/components/LoginPage.js
import React from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';

export default function LoginPage() {
  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      bgcolor: '#1a1a1a'
    }}>
      <Paper sx={{
        p: 4,
        background: 'rgba(30,30,30,0.92)',
        borderRadius: 4,
        boxShadow: 4,
        maxWidth: 340,
        width: '100%',
        textAlign: 'center'
      }}>
        <Typography variant="h4" sx={{ mb: 2, color: '#fff', fontWeight: 700 }}>Login</Typography>
        <TextField variant="filled" label="Email" fullWidth sx={{ mb: 2, input: {color: '#fff'} }}/>
        <TextField variant="filled" label="Password" type="password" fullWidth sx={{ mb: 3, input: {color: '#fff'} }}/>
        <Button variant="contained" color="primary" fullWidth sx={{
          bgcolor: 'linear-gradient(90deg, #e90365, #7d52ff)', fontWeight: 700, mb: 1
        }}>
          Log In
        </Button>
        <Typography color="gray" sx={{ mt: 1, fontSize: 14 }}>
          Don't have an account? <a href='/signup' style={{ color: "#e90365" }}>Sign Up</a>
        </Typography>
      </Paper>
    </Box>
  );
}
