import {errorSaga, errorHandler} from './error';
import { call } from 'redux-saga/effects';

test('Error saga should handle 401', () => {
  const iterator = errorSaga({error: {status: '401'}});

  expect(iterator.next().value).toEqual(call(errorHandler['401']));
});

test('Error saga should handle 404', () => {
  const iterator = errorSaga({error: {status: '404'}});

  expect(iterator.next().value).toEqual(call(errorHandler['404']));
});


