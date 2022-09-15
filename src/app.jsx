import './app.module.css';
import Login from './login/login';
import UserPage from './userPage/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App({ auth }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login auth={auth} />} />
        <Route path='/user' element={<UserPage auth={auth} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
