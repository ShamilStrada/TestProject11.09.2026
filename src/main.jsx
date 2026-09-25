import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import './index.css'
// import App from './App.jsx'
import MainSetup from './MainSetup';
import { BrowserRouter, Routes } from 'react-router-dom';
import NewApp from './NewApp';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import { ThemeProvider } from '@mui/material';
import { theme } from './styled.tsx/theme';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <NewApp></NewApp>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
