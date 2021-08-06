import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as crd from '../../redux/actions/CREDENTIALS';
import postLogin from '../../api/postLogin';
import * as auth from '../../redux/actions/LOGIN_STATUS';

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
      history.push({ pathname: '/', state: { success: response.message } });
    } else {
      toast.error(response.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div>
        <label htmlFor="email">
          Email
          <input
            data-testid="email"
            type="email"
            value={email}
            required
            onChange={(e) => handleChange(e, crd.changeEmail)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password
          <input
            data-testid="password"
            type="password"
            value={password}
            required
            onChange={(e) => handleChange(e, crd.changePassword)}
          />
        </label>
      </div>
      <div>
        <button data-testid="submit" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Login;
