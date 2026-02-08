import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/global.css'; // Đã sửa đường dẫn để fix lỗi build
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);