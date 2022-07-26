import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes ,BrowserRouter } from 'react-router-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="generator-color" element={<App />} />

    </Routes>
  </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

