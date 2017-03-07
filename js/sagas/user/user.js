import user from '../../services/api/user';
import { put, call, takeEvery } from 'redux-saga/effects';

export default function* userSaga() {
  yield takeEvery('GET_USER', getUser);
}

export function* getUser() {
  try {
    const payload = yield call(user);

    yield put({type: 'GET_USER_START', payload});
  } catch (error) {
    yield put({type: 'GET_USER_START_FAIL', error});
  }
}
