export default {
  path: 'users/:id',
  getComponent(nextState, cb) {
    require.ensure([], require => cb(null, require('./components/user').default), 'user');
  }
};
