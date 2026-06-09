import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF9A1F',
      dark: '#E17A00',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#050505',
      paper: '#0D0D0D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B8B8B8',
    },
  },
  typography: {
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
    h1: {
      fontSize: 'clamp(2rem, 8vw, 5rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#FFFFFF',
    },
    h2: {
      fontSize: 'clamp(1.75rem, 6vw, 3.5rem)',
      fontWeight: 700,
      lineHeight: 1.2,
      color: '#FFFFFF',
    },
    h3: {
      fontSize: 'clamp(1.25rem, 4vw, 2rem)',
      fontWeight: 700,
      color: '#FFFFFF',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.8,
      color: '#B8B8B8',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: '4px',
          transition: 'all 0.3s ease',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1400px !important',
        },
      },
    },
  },
})

