import userSaga from './user';
import errorWatcher from './error';

export {
  rootSaga as default
};

function* rootSaga() {
  yield [
    userSaga(),
    errorWatcher()
  ];
}
