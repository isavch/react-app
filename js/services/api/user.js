import { request } from './request';

export const URL = '/users';

export const get = id => request({ url: `${URL}/${id}` });

export const putPassword = data => request({
  url: `${URL}/${data.id}/password`,
  data,
  method: 'PUT'
});

export const disabledUser = (id, data) => request({
  url: `${URL}/${id}/status`,
  data,
  header: {
    'Content-Type': 'application/json'
  },
  method: 'PUT'
});

export const removeUser = id => request({
  url: `${URL}/${id}`,
  method: 'DELETE'
});

export const updateUser = (id, data) => request({
  url: `${URL}/${id}`,
  data,
  method: 'PUT'
});

export const createUser = data => request({
  url: `${URL}`,
  data,
  method: 'POST'
});
