import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import postSignup from '../../api/postSignup';
import * as crd from '../../redux/actions/CREDENTIALS';

const Signup = () => {
  const history = useHistory();
  const credentials = useSelector((state) => state.signup);
  const { name, email, password } = credentials;
  const dispatch = useDispatch();

  const handleChange = (event, action) => {
    dispatch(action(event.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postSignup(credentials);
    console.log(response);
    if (response.auth_token) {
      localStorage.setItem('token', response.auth_token);
      localStorage.setItem('username', response.username);
      localStorage.setItem('success', response.message);
      history.push('/');
    } else {
      localStorage.setItem('errorNow', response.message);
    }
  };

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
    </form>
  );
};

export default Signup;
