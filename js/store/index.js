import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from '../reducers';

const middleware = process.env.NODE_ENV === 'production' ? [thunk] : [thunk, logger()];

const initialStore = {
  user: {},
  app: {},
  notifications: []
};

export default function configureStore() {
  return applyMiddleware(...middleware)(createStore)(reducer, initialStore);
}
