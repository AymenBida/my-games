import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { ToastContainer } from 'react-toastify';
import toast from '../MyToaster/MyToaster';
import 'react-toastify/dist/ReactToastify.css';
import * as crd from '../../redux/actions/CREDENTIALS';
import postLogin from '../../api/postLogin';
import * as auth from '../../redux/actions/LOGIN_STATUS';
import './style/login.scss';

function Login() {
  const history = useHistory();
  const credentials = useSelector((state) => state.credentials);
  const { email, password } = credentials;
  const dispatch = useDispatch();

  const handleChange = (event, action) => {
    dispatch(action(event.target.value));
  };

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
          onChange={(e) => handleChange(e, crd.changeEmail)}
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
          onChange={(e) => handleChange(e, crd.changePassword)}
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
