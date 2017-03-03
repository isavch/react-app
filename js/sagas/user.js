import request from './request';
import user from '../services/api/user';
import { put, takeEvery } from 'redux-saga/effects';

export default function* userSaga() {
  yield takeEvery('GET_USER', getUser);
}

function* getUser() {
  try {
    const userData = yield request(user);

    yield put({type: 'GET_USER_START', payload: userData});
  } catch (error) {
    yield put({type: 'GET_USER_START_FAIL', payload: error});
  }
}
