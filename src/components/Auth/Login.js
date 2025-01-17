// src/pages/Login.js
import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError('');
    try {
      const { data } = await axios.post('https://localhost:7143/api/Auth/login', values);
      localStorage.setItem('access_token', data.token);
      // Decode token / determine role as needed, then navigate:
      // e.g., if role === 'brand', navigate('/brand/dashboard');
      // else if role === 'influencer', navigate('/influencer/dashboard');
      navigate('/brand/dashboard'); // Example default
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // Use the brandBg image from the theme
        background: `url(${theme.customImages.loginBg}) no-repeat center center fixed`,
        backgroundSize: 'cover',
      }}
    >
      <Card sx={{ width: 400, maxWidth: '90%', mx: 2 }}>
        <CardContent>
          <Typography variant="h4" mb={2} align="center" color="primary">
            CollabNamak
          </Typography>
          <Typography variant="h6" mb={2} align="center">
            Sign in to your account
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            type="password"
            label="Password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />

          {error && (
            <Typography variant="body2" color="error" mt={1}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleLogin}
          >
            Login
          </Button>

          <Box display="flex" justifyContent="center" mt={2}>
            <Typography variant="body2">
              Don't have an account?{' '}
              <Typography
                component="span"
                variant="body2"
                color="primary"
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate('/register')}
              >
                Register
              </Typography>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
