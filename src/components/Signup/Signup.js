import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useState } from 'react';
import toast from '../MyToaster/MyToaster';
import 'react-toastify/dist/ReactToastify.css';
import postSignup from '../../api/postSignup';
import * as auth from '../../redux/actions/LOGIN_STATUS';
import './style/signup.scss';

const Signup = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postSignup({ name, email, password });
    if (response.auth_token) {
      dispatch(auth.login({ username: response.username, token: response.auth_token }));
      localStorage.setItem('username', response.username);
      localStorage.setItem('token', response.auth_token);
      history.push({ pathname: '/' });
      toast(response.message, 'success');
    } else {
      toast(response.message, 'error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signupForm">
      <ToastContainer />
      <div>
        <h1 className="text-center">Sign up</h1>
        <div className="w-60 m-auto">
          <p className="text-center fs-7">Hello there! Sign up to pick your favourite game</p>
        </div>
      </div>
      <div>
        <input
          data-testid="username"
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          className="form-control rounded-pill"
          placeholder="Username"
        />
      </div>
      <div>
        <input
          data-testid="email"
          value={email}
          type="email"
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
          className="btn btn-danger clr-orange text-white rounded-pill px-4 mb-5"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Signup;
