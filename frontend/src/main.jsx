import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './assets/index.css';
import App from './App.jsx';
import { ThemeProvider } from './contexts/ThemeContext';
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
    <Analytics />
  </StrictMode>
);
