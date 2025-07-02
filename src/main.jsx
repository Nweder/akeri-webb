// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// src/main.jsx
import './index.css'; // måste finnas!
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
