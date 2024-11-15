import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Box } from '@mui/material';
import Home from './pages/Home';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#121212',
    },
    text: {
      primary: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h4: {
      fontWeight: 700,
      color: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflow : 'scroll',
          padding: 0,
        }}
      >
        <Container maxWidth="lg" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: '100%',
              backgroundColor: '#1e1e1e',
              borderRadius: 2,
              boxShadow: 3,
              padding: 4,
              color: '#ffffff',
            }}
          >
            <Home />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;
