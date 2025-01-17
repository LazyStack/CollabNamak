// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B35', // Vibrant orange
    },
    secondary: {
      main: '#3F4B3B', // Dark greenish-gray
    },
    background: {
      default: '#F4F4F4', // Light gray background
      paper: '#FFFFFF',    // White for cards/paper surfaces
    },
    text: {
      primary: '#333333',
      secondary: '#6B6B6B',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2.4rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.6rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.4rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 400,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    body2: {
      fontSize: '0.9rem',
      fontWeight: 400,
    },
    button: {
      textTransform: 'none', // Don't force uppercase
      fontWeight: 500,
    },
  },
  // Custom references for AI-generated images:
  customImages: {
    // Make sure these files exist in /public/image folder
    // brandBg: '/image/brand-bg.jpg',
    // influencerBg: '/image/influencer-bg.jpg',
    loginBg: '/image/bg1.png',
  },
  components: {
    // Override global MUI components here
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '8px 16px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
});

export default theme;
