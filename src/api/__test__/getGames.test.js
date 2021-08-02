import Axios from 'axios';
import getGames, { endpoint } from '../getGames';

jest.mock('axios');

describe('get games', () => {
  it('Should resolve with response data', async () => {
    Axios.get.mockResolvedValueOnce({ data: [{ id: '1' }, { id: '2' }] });

    const result = await getGames();

    expect(Axios.get).toHaveBeenCalledTimes(1);
    expect(Axios.get).toHaveBeenCalledWith(endpoint);

    expect(result).toEqual([{ id: '1' }, { id: '2' }]);
  });

  it('Should reject with an error when API call fails', async () => {
    const err = new Error('test error');

    Axios.get.mockRejectedValueOnce(err);

    try {
      await getGames();
    } catch (e) {
      expect(e).toEqual(err);
    }
  });
});
