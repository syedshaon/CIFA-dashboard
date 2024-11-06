import { useState } from 'react'
import {ThemeProvider, useTheme } from './contexts/ThemeContext';
import Dashboard from './Dashboard';
 

const App = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;