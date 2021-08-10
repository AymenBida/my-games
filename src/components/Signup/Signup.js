import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import toast from '../MyToaster/MyToaster';
import 'react-toastify/dist/ReactToastify.css';
import postSignup from '../../api/postSignup';
import * as crd from '../../redux/actions/CREDENTIALS';
import * as auth from '../../redux/actions/LOGIN_STATUS';
import './style/signup.scss';

const Signup = () => {
  const history = useHistory();
  const credentials = useSelector((state) => state.credentials);
  const { name, email, password } = credentials;
  const dispatch = useDispatch();

  const handleChange = (event, action) => {
    dispatch(action(event.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postSignup(credentials);
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
          onChange={(e) => handleChange(e, crd.changeName)}
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
          className="btn btn-danger clr-orange text-white rounded-pill px-4 mb-5"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Signup;
