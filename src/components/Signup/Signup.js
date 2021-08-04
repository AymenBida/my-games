import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import postSignup from '../../api/postSignup';
import * as crd from '../../redux/actions/CREDENTIALS';
import * as auth from '../../redux/actions/LOGIN_STATUS';

const Signup = () => {
  const history = useHistory();
  const credentials = useSelector((state) => state.signup);
  const status = useSelector((state) => state.loginStatus);
  const { failure } = status;
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
      history.push({ pathname: '/', state: { success: response.message } });
    } else {
      dispatch(auth.failure(response.message));
    }
  };

  useEffect(() => () => {
    dispatch(auth.failure());
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div data-testid="signup">
        <div>
          <label htmlFor="username">
            Username
            <input
              id="username"
              data-testid="username"
              type="text"
              value={name}
              required
              onChange={(e) => handleChange(e, crd.changeName)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input
              id="email"
              data-testid="email"
              value={email}
              type="email"
              required
              onChange={(e) => handleChange(e, crd.changeEmail)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              id="password"
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
      </div>
      {failure ? <div>{failure}</div> : null}
    </form>
  );
};

export default Signup;
