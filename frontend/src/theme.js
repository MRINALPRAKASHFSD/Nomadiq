import { createTheme } from '@mui/material/styles';

const primary = '#1976d2';
const secondary = '#4caf50';
const warning = '#ff9800';
const error = '#f44336';
const darkBg = '#0a1428';
const darkSurface = '#1a2d4d';

const baseOptions = (mode) => ({
  palette: {
    mode,
    primary: { main: primary },
    secondary: { main: secondary },
    warning: { main: warning },
    error: { main: error },
    background: {
      default: mode === 'dark' ? darkBg : '#f5f7fb',
      paper: mode === 'dark' ? darkSurface : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#ffffff' : '#111827',
      secondary: mode === 'dark' ? '#e0e0e0' : '#4b5563',
    },
  },
  shape: {
    borderRadius: 16,
  },
  typography: {
    fontFamily:
      '"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 600 },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background:
            mode === 'dark'
              ? 'linear-gradient(135deg, rgba(26,45,77,0.85), rgba(13,23,46,0.9))'
              : 'linear-gradient(135deg, rgba(255,255,255,0.85), rgba(245,247,255,0.9))',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 18px 45px rgba(0,0,0,0.4)',
        },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 999,
          transition:
            'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 12px 30px rgba(25,118,210,0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 18px 50px rgba(0,0,0,0.45)',
          },
        },
      },
    },
  },
});

export const createAppTheme = (mode = 'dark') => createTheme(baseOptions(mode));