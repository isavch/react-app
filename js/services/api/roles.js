import { request } from './request';

export const URL = '/roles';

export const getRoles = () => request({ url: URL });

export const getRolesMembers = () => request({ url: `/rolesMembers`});

export const postRole = data => request({
  url: URL,
  data,
  method: 'POST'
});

export const deleteRole = id => request({
  url: `${URL}/${id}`,
  method: 'DELETE'
});

export const getRoleMembers = id => request({ url: `${URL}/${id}/members` });

export const putRoleMembers = (id, data) => request({
  url: `${URL}/${id}/members`,
  data,
  method: 'PUT'
});
