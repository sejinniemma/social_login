import React from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';

const Login = ({ auth }) => {
  const navigate = useNavigate();
  const goToUserPage = () => {
    navigate('/user');
  };
  const onClick = (event) => {
    const value = event.currentTarget.textContent;
    auth.login(value).then(goToUserPage);
  };

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.login}>
        <ul>
          <li>
            <button className={styles.button} onClick={onClick}>
              Facebook
            </button>
          </li>
          <li>
            <button className={styles.button} onClick={onClick}>
              Google
            </button>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
