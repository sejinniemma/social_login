import React from 'react';
import ReactDOM from 'react-dom/client';
import styles from './index.module.css';
import App from './app';
import Auth from './service/auth_service';

const root = ReactDOM.createRoot(document.getElementById('root'));
const auth = new Auth();

root.render(
  <React.StrictMode>
    <div className='container'>
      <App auth={auth} />
    </div>
  </React.StrictMode>
);
