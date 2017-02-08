export default {
  path: '/notAuthenticated',
  getComponent(nextState, cb) {
    require.ensure([], require => cb(null, require('./components/notAuthenticated').default), 'notAuthenticated');
  }
};
