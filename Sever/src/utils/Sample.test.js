// users.test.js
import axios from 'axios';

jest.mock('axios');

test('should fetch users', () => {
  const responceData = {data: [{name: 'Bob'}]};
  axios.get.mockResolvedValue(responceData);
  return axios.get('/users.json').then(resp => expect(resp).toEqual(responceData));
});