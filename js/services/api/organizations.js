import { request } from './request';
import {convertStatuses, setParams} from './common';

export const URL = '/organizations';


const queryParams = [
  'offset',
  'limit',
  'query',
  'selectedStatus',
  'dateBegin',
  'dateEnd',
  'selectedManager',
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

export const getOrganization = id => request({ url: `${URL}/${id}`});

export const getOrganizationUsers = id => request({ url: `${URL}/${id}/users`});

export const create = organization => request({
  url: URL,
  data: organization,
  method: 'POST'
});

export const update = organization => request({
  url: `${URL}/${organization.id}`,
  data: organization,
  method: 'PUT'
});

export const remove = organization => request({
  url: `${URL}/${organization.id}`,
  method: 'DELETE'
});
