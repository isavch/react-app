import { request } from './request';
import {URL as ORGANIZATIONS_URL} from './organizations';

export const get = organizationID => request({
  url: `${ORGANIZATIONS_URL}/${organizationID}/distributionLists`
});

export const create = (organizationID, distribution) => request({
  url: `${ORGANIZATIONS_URL}/${organizationID}/distributionLists`,
  data: distribution,
  method: 'POST'
});

export const update = (organizationID, distribution) => request({
  url: `${ORGANIZATIONS_URL}/${organizationID}/distributionLists/${distribution.id}`,
  data: distribution,
  method: 'PUT'
});

export const remove = (organizationID, distributionID) => request({
  url: `${ORGANIZATIONS_URL}/${organizationID}/distributionLists/${distributionID}`,
  method: 'DELETE'
});
