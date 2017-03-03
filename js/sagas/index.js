import userSaga from './user';

export default function* rootSaga() {
  yield [
    userSaga()
  ];
}
