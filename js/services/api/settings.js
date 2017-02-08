import { request } from './request';

export const URL = '/settings';

export const get = () => request({ url: URL });

export const getExchange = () => request({ url: `${URL}/servers` });

export const getDatabases = () => request({ url: `${URL}/databases` });

export const getPlans = () => request({ url: `${URL}/mailboxPlans`});

export const getOAB = () => request({ url: `${URL}/servers/oab`});

export const postPlan = data => request({
  url: `${URL}/mailboxPlans`,
  data,
  method: 'POST'
});

export const deletePlan = id => request({
  url: `${URL}/mailboxPlans/${id}`,
  method: 'DELETE'
});

export const putSettings = data => request({
  url: URL,
  data,
  method: 'PUT'
});

export const updateServer = data => request({
  url: `${URL}/servers/${data.id}`,
  data,
  method: 'PUT'
});
