import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Initialize Google Analytics
if (typeof window !== 'undefined' && window.gtag) {
  // Analytics is already initialized in the HTML head
  console.log('Google Analytics initialized');
}

createRoot(document.getElementById("root")!).render(<App />);
