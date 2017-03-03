import { call, put } from 'redux-saga/effects';

export default function* request(api) {
  try {
    return yield call(api);
  } catch (error) {
    yield put({type: 'REQUEST_ERROR', error});
    throw error;
  }
}
