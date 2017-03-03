import request from './request';

test('Request saga should call api', () => {
  const api = jest.fn(() => Promise.resolve({data: 'data'}));

  request(api).next();

  expect(api).toHaveBeenCalled();
});
