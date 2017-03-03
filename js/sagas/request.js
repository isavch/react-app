import { call, put } from 'redux-saga/effects';

export {
  request as default
};

const errorHandler = {
  '401': error => {
    put({type: 'AUTH_FAILED', error});
  },
  '404': error => {
    put({type: 'NOT_FOUND', error});
  }
};

function* request(api) {
  try {
    return yield call(api);
  } catch (error) {
    if (errorHandler[error.status]) {
      yield errorHandler[error.status](error);
    }
    throw error;
  }
}
