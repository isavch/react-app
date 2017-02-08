import { request } from './request';

export const URL = '/me';

export default () => request({
  url: URL
});
