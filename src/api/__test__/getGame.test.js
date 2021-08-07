import Axios from 'axios';
import getGame, { endpoint } from '../getGame';

jest.mock('axios');

describe('get game', () => {
  it('Should resolve with response data', async () => {
    const gameId = '1';
    Axios.get.mockResolvedValueOnce({ data: [{ id: '1' }, { id: '2' }] });

    const result = await getGame(gameId);

    expect(Axios.get).toHaveBeenCalledTimes(1);
    expect(Axios.get).toHaveBeenCalledWith(endpoint + gameId);

    expect(result).toEqual([{ id: '1' }, { id: '2' }]);
  });

  it('Should reject with an error when API call fails', async () => {
    const err = new Error('test error');

    Axios.get.mockRejectedValueOnce(err);

    try {
      await getGame('50');
    } catch (e) {
      expect(e).toEqual(err);
    }
  });
});
