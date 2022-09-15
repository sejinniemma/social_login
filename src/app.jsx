import './app.module.css';
import Login from './login/login';
import styles from './app.module.css';

function App({ auth }) {
  return (
    <div className={styles.container}>
      <Login auth={auth} />
    </div>
  );
}

export default App;
