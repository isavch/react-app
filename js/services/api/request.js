import axios from 'axios';
import { browserHistory } from 'react-router';
import {setNotification} from 'actions/notifications';

export {
  request,
  init
};

let defaultOptions = {};
const BASE_URL = process.env.API_URL;

const errorHandler = {
  'PUT': {
    '401': () => browserHistory.replace('/notAuthenticated'),
    '403': () => browserHistory.replace('/notAuthorized')
  },
  'POST': {
    '401': () => browserHistory.replace('/notAuthenticated'),
    '403': () => browserHistory.replace('/notAuthorized')
  },
  'GET': {
    '401': () => browserHistory.replace('/notAuthenticated'),
    '403': () => browserHistory.replace('/notAuthorized'),
    '404': () => browserHistory.replace('/notFound')
  }
};

const successNotificationsHandler = {
  'POST': dispatch => dispatch(setNotification({type: 'success', message: 'Saved successfully.'})),
  'PUT': dispatch => dispatch(setNotification({type: 'success', message: 'Saved successfully.'})),
  'DELETE': dispatch => dispatch(setNotification({type: 'success', message: 'Removed successfully.'}))
};

function init(options) {
  defaultOptions = Object.assign({}, defaultOptions, options);
}

const handleError = reject => error => {
  const method = error.config.method.toUpperCase();
  const {status} = error.response;
  const {dispatch} = defaultOptions;
  const {message} = error;

  if (typeof dispatch === 'function') {
    dispatch(setNotification({type: 'error', message}));
  }

  if (errorHandler[method] && errorHandler[method][status]) {
    errorHandler[method][status]();
  }

  return reject(error);
};

const handleSuccess = resolve => response => {
  const method = response.config.method.toUpperCase();
  const {dispatch} = defaultOptions;

  if (successNotificationsHandler[method]) {
    successNotificationsHandler[method](dispatch);
  }

  resolve(response);
};

function request(options) {
  const requestOptions = Object.assign({}, options, {
    baseURL: BASE_URL,
    headers: Object.assign({}, options.header || {}, {
      'Accept': 'application/json'
    }),
    withCredentials: true
  });

  return new Promise((resolve, reject) => {
    axios(requestOptions)
      .then(handleSuccess(resolve))
      .catch(handleError(reject));
  });
}

