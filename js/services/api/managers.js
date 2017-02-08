import { request } from './request';

export const URL = '/managers';

export const get = () => {
  return request({
    url: URL
  });
};

