import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { lightTheme } from 'themes/index.js';
import { App } from 'App';
import { CssBaseline, StyledEngineProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <App />
      </StyledEngineProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
