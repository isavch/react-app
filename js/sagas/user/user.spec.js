import {getUser} from './user';
import { call } from 'redux-saga/effects';
import user from '../../services/api/user';

test('User request', () => {
  const iterator = getUser();

  expect(iterator.next().value).toEqual(call(user));
});
