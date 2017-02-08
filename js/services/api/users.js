import { request } from './request';
import {convertStatuses, setParams} from './common';

export const URL = '/users';

const queryParams = [
  'offset',
  'limit',
  'query',
  'selectedStatus',
  'dateBegin',
  'dateEnd',
  'selectedOrganization',
  'sortedCriteria'
];

export const get = (config = {}) => {
  const statuses = convertStatuses(config.selectedStatuses);
  const options = {
    url: statuses ? `${URL}?${statuses}` : URL,
    params: setParams(queryParams, config)
  };

  return request(options);
};

export const getUser = id => request(`${URL}/${id}`);

export const create = user => request({
  url: URL,
  data: user,
  method: 'POST'
});

export const update = user => request({
  url: `${URL}/${user.id}`,
  data: user,
  method: 'PUT'
});

export const remove = user => request({
  url: `${URL}/${user.id}`,
  method: 'DELETE'
});
