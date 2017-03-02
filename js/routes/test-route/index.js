export default {
  path: 'test-route',
  getComponent(nextState, cb) {
    require.ensure([], require => cb(null, require('./test-route').default), 'test-route');
  }
};
