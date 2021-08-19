import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import toast from '../MyToaster/MyToaster';
import 'react-toastify/dist/ReactToastify.css';
import postLogin from '../../api/postLogin';
import * as auth from '../../redux/actions/LOGIN_STATUS';
import './style/login.scss';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postLogin({ email, password });
    if (response.auth_token) {
      dispatch(auth.login({ username: response.username, token: response.auth_token }));
      localStorage.setItem('username', response.username);
      localStorage.setItem('token', response.auth_token);
      history.push({ pathname: '/' });
      toast(`Hello ${response.username}, you are now logged in!`, 'success');
    } else {
      toast(response.message, 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <ToastContainer />
      <div>
        <h1 className="text-center">Sign in</h1>
        <div className="w-60 m-auto">
          <p className="text-center fs-7">Hello there! Sign in and pick your favourite game</p>
        </div>
      </div>
      <div>
        <input
          data-testid="email"
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="form-control rounded-pill"
          placeholder="Email"
        />
      </div>
      <div>
        <input
          data-testid="password"
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="form-control rounded-pill"
          placeholder="Password"
        />
      </div>
      <div>
        <button
          data-testid="submit"
          type="submit"
          className="btn btn-success text-white rounded-pill px-4 mb-5"
        >
          Sign in
        </button>
      </div>
    </form>
  );
}

export default Login;
