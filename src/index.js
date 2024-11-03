// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Remova ou comente as linhas abaixo, pois os arquivos foram excluídos
// import './index.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Comente ou remova também a linha que chama reportWebVitals
// reportWebVitals();
