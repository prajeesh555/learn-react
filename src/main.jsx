// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Posts.jsx'; // Your main App component
import './index.css'; // Your global styles
import './Userlist.jsx'
import Comment from './Comment.jsx'
import car from './car.jsx'; 

// Import BrowserRouter from react-router-dom
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>

      <Comment/>

    </BrowserRouter>
  </React.StrictMode>,
);