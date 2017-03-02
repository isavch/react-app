import axios from 'axios';

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

  if (options) {
    return Promise.resolve({name: 'User'});
  }

  return axios(requestOptions);
}

