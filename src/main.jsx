import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.scss'
import App from './App.jsx'
import ThemeProvider from 'react-bootstrap/ThemeProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
    >
    <App />

  </ThemeProvider>
    
  </StrictMode>,
)
