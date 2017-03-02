import { call, put } from 'redux-saga/effects';

export default function* request(api) {
  try {
    const result = yield call(api);

    return result;
  } catch (error) {
    yield put({type: 'REQUEST_ERROR', error});
  }
}
