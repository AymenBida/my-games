import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { render } from '@testing-library/react';
import { fireEvent } from '@testing-library/react/dist/fire-event';
import rootReducer from '../../../redux/reducers';
import postSignup from '../../../api/postSignup';

import Signup from '../Signup';

jest.mock('../../../api/postSignup');

const store = createStore(rootReducer);

describe('Signup form', () => {
  describe('When rendered correctly', () => {
    it('renders a Signup form with username, email, and password fields, and a submit button', () => {
      const { getByTestId } = render(<Provider store={store}><Signup /></Provider>);

      const username = getByTestId('username');
      const password = getByTestId('password');
      const email = getByTestId('email');
      const submit = getByTestId('submit');

      expect(username.value).toBe('');
      expect(username.type).toBe('text');
      expect(password.value).toBe('');
      expect(password.type).toBe('password');
      expect(email.value).toBe('');
      expect(email.type).toBe('email');
      expect(submit.textContent).toBe('Sign up');
      expect(submit.type).toBe('submit');
    });
  });

  describe('When clicking on Submit', () => {
    it('it should call send the credentials to the api', () => {
      const { getByTestId } = render(<Provider store={store}><Signup /></Provider>);
      const username = getByTestId('username');
      const password = getByTestId('password');
      const email = getByTestId('email');
      const submit = getByTestId('submit');

      fireEvent.change(username, {
        target: {
          value: 'Aymen',
        },
      });
      fireEvent.change(email, {
        target: {
          value: 'aymen@gmail.com',
        },
      });
      fireEvent.change(password, {
        target: {
          value: '123456',
        },
      });

      fireEvent.click(submit);

      expect(postSignup).toBeCalled();
    });
  });
});
