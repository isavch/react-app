import { request } from './request';
import {URL as ORGANIZATIONS_URL} from './organizations';

export const get = organizationID => request({
  url: `${ORGANIZATIONS_URL}/${organizationID}/resources`
});

export const create = (organizationID, resource) => request({
  url: `${ORGANIZATIONS_URL}/${organizationID}/resources`,
  data: resource,
  method: 'POST',
  headers: {
    'Content-type': 'application/json'
  }
});

export const update = (organizationID, resource) => request({
  url: `${ORGANIZATIONS_URL}/${organizationID}/resources/${resource.id}`,
  data: resource,
  method: 'PUT',
  headers: {
    'Content-type': 'application/json'
  }
});

export const remove = (organizationID, resourceID) => request({
  url: `${ORGANIZATIONS_URL}/${organizationID}/resources/${resourceID}`,
  method: 'DELETE'
});
