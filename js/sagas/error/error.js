import { call, put, takeEvery } from 'redux-saga/effects';

export default function* errorWatcher() {
  yield takeEvery(({error}) => error && error.status, errorSaga);
}

export const errorHandler = {
  * '401'() {
    yield put({type: 'LOGOUT'});
  },
  * '404'() {
    yield put({type: 'NOT_FOUND'});
  }
};

export function* errorSaga({error}) {
  const handler = errorHandler[error.status];

  if (handler) {
    yield call(handler);
  }
}


