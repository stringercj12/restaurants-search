import React from 'react';

import theme from './global/styles/theme';
import { Home } from './pages/Home';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
  );
}

export default App;
