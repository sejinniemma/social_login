import React from 'react';
import styles from './header.module.css';

const Header = ({ Logout }) => {
  return (
    <div className={styles.header}>
      <h1>Login</h1>
      {Logout && (
        <button onClick={Logout} className={styles.button}>
          logout
        </button>
      )}
    </div>
  );
};

export default Header;
