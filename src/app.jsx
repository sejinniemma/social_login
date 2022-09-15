import './app.module.css';
import Login from './login/login';
import styles from './app.module.css';

function App() {
  return (
    <div className={styles.container}>
      <Login />
    </div>
  );
}

export default App;
