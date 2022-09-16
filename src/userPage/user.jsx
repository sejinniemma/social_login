import React from 'react';
import { useNavigate } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './user.module.css';

const UserPage = ({ auth }) => {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/');
  };
  const onLogin = () => {
    auth.logout().then(goToLogin);
  };

  return (
    <div className={styles.container}>
      <Header Logout={onLogin} />
      <h1 className={styles.h1}>User Page!</h1>
      <Footer />
    </div>
  );
};

export default UserPage;
