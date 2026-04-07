import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#D9B061', // Elegant Gold/Mustard accent from screenshots
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#334155', // Slate-700
    },
    background: {
      default: '#F8FAFC', // Bg-Base
      paper: '#FFFFFF',   // Bg-Surface
    },
    text: {
      primary: '#0F172A', // Slate-900 for headings
      secondary: '#475569', // Slate-600 for body
    },
    divider: '#E2E8F0',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
    h1: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 800,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Merriweather", serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
      color: '#475569',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '12px 28px',
          fontWeight: 600,
          borderRadius: 6,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        containedPrimary: {
          backgroundColor: '#D9B061',
          '&:hover': {
            backgroundColor: '#C59A4F',
          },
        },
        outlinedPrimary: {
          borderColor: '#E2E8F0',
          color: '#334155',
          '&:hover': {
            backgroundColor: '#F8FAFC',
            borderColor: '#CBD5E1',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          border: '1px solid #E2E8F0',
        },
      },
    },
  },
});

export default theme;
