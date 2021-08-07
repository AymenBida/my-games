import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../../../redux/reducers';
import Game from '../Game';
import getGame from '../../../../../api/getGame';

const store = createStore(rootReducer);

jest.mock('../../../../../api/getGame');

describe('<Game />', () => {
  describe('When rendered correctly', () => {
    it('Makes a call to getGame API with params.id', () => {
      const history = createMemoryHistory();
      render(
        <Provider store={store}>
          <Router history={history}>
            <Game />
          </Router>
        </Provider>,
      );
      history.push('/games/1');

      expect(history.location.pathname).toBe('/games/1');
      expect(getGame).toBeCalled();
    });
  });
});
