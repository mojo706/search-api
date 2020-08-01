jest.mock('axios');

import axios from 'axios';
import { getPlacesByName } from './SearchController';

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('SearchController', () => {
  test('an empty query string', async () => {
    mockedAxios.get.mockResolvedValue({ data: { features: [] } });
    const result = await getPlacesByName('Paris');
    expect(result).toEqual({ features: [] });
  });

  test('an invalid non-json response', async () => {
    mockedAxios.get.mockRejectedValue(new Error('Service Unavailable.'));
    await expect(getPlacesByName('Chamonix')).rejects.toThrow('Service Unavailable.');
  });
});