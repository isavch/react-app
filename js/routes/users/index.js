export default {
  path: 'users',
  getComponent(nextState, cb) {
    require.ensure([], require => cb(null, require('./components/users').default), 'users');
  }
};
