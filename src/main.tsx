import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* Router provides location context for pages. We use BrowserRouter for simplicity. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);