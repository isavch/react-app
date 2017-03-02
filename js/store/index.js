import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import sagas from '../sagas';
import reducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = process.env.NODE_ENV === 'production' ? [sagaMiddleware] : [logger(), sagaMiddleware];

const initialStore = {
  app: {},
  notifications: []
};

export default function configureStore() {
  const store = createStore(reducer, initialStore, applyMiddleware(...middleware));

  sagaMiddleware.run(sagas);

  return store;
}
