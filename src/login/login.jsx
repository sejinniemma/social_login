import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.login}>
        <h2>Login</h2>
        <ul>
          <li>
            <button>Facebook</button>
          </li>
          <li>
            <button>Twitter</button>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
