import user from './user';

export default function* rootSaga() {
  yield [
    user()
  ];
}
