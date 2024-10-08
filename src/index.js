import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';


const theme = {
  colors: {
    black: "#212121",
    white: "#ffffff",
    red: "red",
    green: "green",
    orange: "orange",
  },
  radii: {
    small: "4px",
    medium: "8px",
    large: "16px",

  },
  spacing: value => `${value * 4}px`,
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      </ThemeProvider>
  </React.StrictMode>
);