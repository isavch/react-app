/** @module Common */

export {
  createReducer
};

/**
 * @param {Function[]} handlers
 * @returns {function(*=, *=)}
 */
function createReducer(handlers) {
  return (state = null, action) => {
    if (handlers[action.type]) {
      return handlers[action.type](state, action);
    }
    return state;
  };
}

