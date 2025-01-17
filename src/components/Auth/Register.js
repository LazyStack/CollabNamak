// src/pages/Register.js
import React, { useState } from 'react';
import { Box, Card, CardContent, Typography, TextField, Button, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'brand',
  });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async () => {
    setError('');
    setMessage('');
    try {
      const { data } = await axios.post('https://localhost:7143/api/Auth/register', formData);
      setMessage(data.message);
    } catch (err) {
      setError('Registration failed. Please check your details.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
            Create an account
          </Typography>

          <TextField
            fullWidth
            margin="normal"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            margin="normal"
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <TextField
            select
            fullWidth
            margin="normal"
            label="Role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <MenuItem value="brand">Brand</MenuItem>
            <MenuItem value="influencer">Influencer</MenuItem>
          </TextField>

          {message && (
            <Typography variant="body2" color="success.main" mt={1}>
              {message}
            </Typography>
          )}
          {error && (
            <Typography variant="body2" color="error" mt={1}>
              {error}
            </Typography>
          )}

          <Button
            variant="contained"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleRegister}
          >
            Register
          </Button>

          <Box display="flex" justifyContent="center" mt={2}>
            <Typography variant="body2">
              Already have an account?{' '}
              <Typography
                component="span"
                variant="body2"
                color="primary"
                sx={{ cursor: 'pointer' }}
                onClick={() => navigate('/')}
              >
                Login
              </Typography>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Register;
