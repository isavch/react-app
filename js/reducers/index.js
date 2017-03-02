import { combineReducers } from 'redux';
import notifications from './notifications';
import app from './app';

function createReducer(handlers) {
  return (state = null, action) => {
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

export default combineReducers({
  app: createReducer(app),
  notifications: createReducer(notifications)
});
