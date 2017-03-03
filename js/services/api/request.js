import axios from 'axios';
import {info} from '../logger';

export {
  request as default
};

const BASE_URL = process.env.API_URL;

function request(options) {
  const requestOptions = Object.assign({}, options, {
    baseURL: BASE_URL,
    headers: Object.assign({}, options.header || {}, {
      'Accept': 'application/json'
    })
  });

  info('REQUEST::START', options.url);

  if (options) {
    return Promise.resolve({data: 'data'});
  }

  return new Promise((resolve, reject) => {
    axios(requestOptions)
      .then(data => {
        info('REQUEST::DONE', data);
        resolve(data);
      })
      .catch(error => {
        info('REQUEST::FAIL', error.message);
        reject(error);
      });
  });
}

