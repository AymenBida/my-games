import { fireEvent, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Navbar from '../Navbar';
import rootReducer from '../../../redux/reducers';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const store = createStore(rootReducer);

describe('Navbar element', () => {
  describe('If rendered when not logged in', () => {
    it('renders a Navbar with Signup and Login buttons', () => {
      const history = createMemoryHistory();
      const { getByTestId } = render(
        <Provider store={store}>
          <Router history={history}>
            <Navbar />
          </Router>
        </Provider>,
      );
      const signup = getByTestId('signup');
      const login = getByTestId('login');

      expect(signup.textContent).toBe('Register');
      expect(signup.type).toBe('button');
      expect(login.textContent).toBe('Login');
      expect(login.type).toBe('button');
    });
  });

  describe('If rendered when logged in', () => {
    it('renders a Navbar with Username and with a Logout button', () => {
      store.dispatch({ type: 'LOGIN', payload: { username: 'BIDA' } });
      const history = createMemoryHistory();
      const { getByTestId } = render(
        <Provider store={store}>
          <Router history={history}>
            <Navbar />
          </Router>
        </Provider>,
      );
      console.log(store.getState());
      const username = getByTestId('username');
      const logout = getByTestId('logout');

      expect(username.textContent).toBe('BIDA');
      expect(logout.textContent).toBe('Logout');
      expect(logout.type).toBe('button');
      localStorage.clear();
    });
  });

  describe('When Register button is clicked', () => {
    it('redirects to the /signup route', () => {
      store.dispatch({ type: 'LOGOUT' });
      const history = createMemoryHistory();
      const { getByTestId } = render(
        <Provider store={store}>
          <Router history={history}>
            <Navbar />
          </Router>
        </Provider>,
      );
      const signup = getByTestId('signup');

      fireEvent.click(signup);

      expect(history.location.pathname).toBe('/signup');
    });
  });

  describe('When Logout button is clicked', () => {
    it('redirects to the root page and deletes username and token', () => {
      store.dispatch({ type: 'LOGIN', payload: { username: 'BIDA' } });
      const history = createMemoryHistory();
      const { getByTestId } = render(
        <Provider store={store}>
          <Router history={history}>
            <Navbar />
          </Router>
        </Provider>,
      );
      const logout = getByTestId('logout');

      fireEvent.click(logout);

      expect(history.location.pathname).toBe('/');
    });
  });
});
