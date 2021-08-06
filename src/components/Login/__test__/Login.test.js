import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { fireEvent } from '@testing-library/react/dist/fire-event';
import Login from '../Login';
import rootReducer from '../../../redux/reducers';
import postLogin from '../../../api/postLogin';

const store = createStore(rootReducer);

jest.mock('../../../api/postLogin');

describe('Login form', () => {
  describe('When rendered correctly', () => {
    it('renders a Login form with email and password fields, and a login button', () => {
      const { getByTestId } = render(<Provider store={store}><Login /></Provider>);

      const password = getByTestId('password');
      const email = getByTestId('email');
      const submit = getByTestId('submit');

      expect(password.value).toBe('');
      expect(password.type).toBe('password');
      expect(email.value).toBe('');
      expect(email.type).toBe('email');
      expect(submit.textContent).toBe('Submit');
      expect(submit.type).toBe('submit');
    });
  });
});

describe('When clicking on Submit', () => {
  it('it should call send the credentials to the api', () => {
    const { getByTestId } = render(<Provider store={store}><Login /></Provider>);
    const password = getByTestId('password');
    const email = getByTestId('email');
    const submit = getByTestId('submit');

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

    expect(postLogin).toBeCalled();
  });
});
